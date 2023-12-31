export type CredentialSubject = {
  type: string;
  [key: string]: string;
};

export type VCType = {
  '@context': any[];
  id: string;
  type: string;
  proof: {
    '@context': string;
    type: string;
    created: string;
    cryptosuite: string;
    proofPurpose: string;
    verificationMethod: string;
    proofValue: string;
  };
  credentialSubject: CredentialSubject;
  expirationDate: string;
  issuanceDate: string;
  issuer: string;
};

export type KeyValueList = { key: string; value: string }[];

export type EllipticElGamalKeyPair = {
  publicKey: string;
  secretKey: string;
};
