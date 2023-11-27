import { sign, verify, deriveProof, verifyProof } from '@zkp-ld/jsonld-proofs';

type useVCLogicsProps = {
  keyPairs: string;
  documentLoader: any;
  didDocs: any;
};

export const useVCLogics = ({
  keyPairs,
  documentLoader,
  didDocs,
}: useVCLogicsProps) => {
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
    const result = await verifyProof(derivedProof, didDocs, documentLoader, {
      challenge: verifierChallenge,
    });
    if (result.verified === true) return true;
    return false;
  };

  return { signVC, verifyVC, generateVP, verifyVp };
};
