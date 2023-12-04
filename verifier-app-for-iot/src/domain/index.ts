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

export type VPType = {
  '@context': any[];
  type: string[];
  verifiableCredential: VCType;
  proof: {
    '@context': string;
    type: string;
    created: string;
    cryptosuite: string;
    proofPurpose: string;
    verificationMethod: string;
    proofValue: string;
    challenge: string;
  };
};

export type KeyValueList = { key: string; value: string }[];
