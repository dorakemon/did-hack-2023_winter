export type CredentialSubject = {
  type: string;
  [key: string]: string;
};

export type VCType = {
  id: string;
  type: string;
  proof: {
    type: string;
    created: string;
    cryptosuite: string;
    proofPurpose: string;
    verificationMethod: string;
  };
  credentialSubject: CredentialSubject;
  expirationDate: string;
  issuanceDate: string;
  issuer: string;
};

export type KeyValueList = { key: string; value: string }[];
