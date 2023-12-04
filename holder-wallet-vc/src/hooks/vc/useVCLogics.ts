import {
  sign,
  deriveProof,
  verifyProof,
  blindVerify,
} from '@dorakemon/jsonld-proofs';
import { JsonLd } from 'jsonld/jsonld-spec';
import { useMemo } from 'react';

import { CONTEXTS, customDocumentLoader } from './materials';

type useVCLogicsProps = {
  keyPairs: string;
  didDocs: any;
};

export const useVCLogics = ({ keyPairs, didDocs }: useVCLogicsProps) => {
  const documentLoader = useMemo(() => {
    const contexts = new Map(CONTEXTS);
    const contextsValidated = new Map<string, boolean>(
      CONTEXTS.map(([k, _]) => [k, true]),
    );
    const enableRemote = false;
    const defaultDocumentLoader = customDocumentLoader(
      new Map(CONTEXTS.map(([k, v]) => [k, JSON.parse(v) as JsonLd])),
    );

    try {
      const validatedContexts = [...contexts.entries()].filter(([k, _]) =>
        contextsValidated.get(k),
      );
      const parsedValidatedContextsPairs: [string, JsonLd][] =
        validatedContexts.map(([k, v]) => [k, JSON.parse(v) as JsonLd]);
      const parsedValidatedContexts = new Map(parsedValidatedContextsPairs);

      return customDocumentLoader(parsedValidatedContexts, enableRemote);
    } catch (e) {
      return defaultDocumentLoader;
    }
  }, []);

  const signVC = async (doc: any) => {
    const vc = await sign(
      doc,
      JSON.parse(keyPairs),
      documentLoader,
      new Uint8Array(Buffer.from('a1c82605-bb01-4830-8293-13f415c35302')),
    );
    return vc;
  };

  const verifyVC = async (cred: any, secret: string) => {
    const result = await blindVerify(
      new Uint8Array(Buffer.from(secret)),
      cred,
      JSON.parse(didDocs),
      documentLoader,
    );
    if (result.verified) return true;
    return false;
  };

  const generateVP = async (
    cred: any,
    revealDoc: any,
    verifierChallenge: string,
    secret: string,
    openerPubKey: string,
  ) => {
    const vcPairs = {
      original: cred,
      disclosed: revealDoc,
    };

    const vp = await deriveProof(
      [vcPairs],
      JSON.parse(didDocs),
      [
        'https://www.w3.org/2018/credentials/v1',
        'https://www.w3.org/ns/data-integrity/v1',
        'https://schema.org/',
        'https://zkp-ld.org/context.jsonld',
      ] as any,
      documentLoader,
      {
        challenge: verifierChallenge,
        // domain: verifierDomain,
        secret: new Uint8Array(Buffer.from(secret)),
        openerPubKey,
        // blindSignRequest,
        // withPpid: holderWithPpid,
        // predicates: checked_predicates,
        // circuits,
      },
    );
    return vp;
  };

  const verifyVp = async (derivedProof: any, verifierChallenge: string) => {
    const result = await verifyProof(
      derivedProof,
      JSON.parse(didDocs),
      documentLoader,
      {
        challenge: verifierChallenge,
      },
    );
    if (result.verified === true) return true;
    return false;
  };

  return { documentLoader, signVC, verifyVC, generateVP, verifyVp };
};
