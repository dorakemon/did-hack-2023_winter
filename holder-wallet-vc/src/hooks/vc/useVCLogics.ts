import { sign, verify, deriveProof, verifyProof } from '@zkp-ld/jsonld-proofs';
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
    await sign(JSON.parse(doc), JSON.parse(keyPairs), documentLoader);
  };

  const verifyVC = async (cred: any) => {
    const result = await verify(cred, didDocs, documentLoader);
    if (result.verified) return true;
    return false;
  };

  const generateVP = async (
    cred: any,
    revealDoc: any,
    verifierChallenge: string,
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
        // secret,
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
