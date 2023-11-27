import { VCType } from '@/domain';

export const InitVCList: VCType[] = [
  {
    id: 'http://example.org/credentials/person/2',
    type: 'VerifiableCredential',
    proof: {
      type: 'DataIntegrityProof',
      created: '2023-11-22T00:36:26.967Z',
      cryptosuite: 'bbs-termwise-signature-2023',
      proofPurpose: 'assertionMethod',
      verificationMethod: 'did:example:issuer2#bls12_381-g2-pub001',
    },
    credentialSubject: {
      type: 'StudentCard',
      faculty: 'Computer Science',
      laboratory: 'Sako Lab',
      birthDate: '2000-01-01',
      name: 'Halu Kimura',
      university: 'Waseda University',
    },
    expirationDate: '2026-01-01T00:00:00Z',
    issuanceDate: '2023-01-01T00:00:00Z',
    issuer: 'did:example:issuer2',
  },
  {
    id: 'http://example.org/credentials/person/2',
    type: 'VerifiableCredential',
    proof: {
      type: 'DataIntegrityProof',
      created: '2023-11-22T00:36:26.967Z',
      cryptosuite: 'bbs-termwise-signature-2023',
      proofPurpose: 'assertionMethod',
      verificationMethod: 'did:example:issuer2#bls12_381-g2-pub001',
    },
    credentialSubject: {
      type: 'StudentCard',
      'http://example.org/faculty': 'Computer Science',
      'http://example.org/laboratory': 'Nanashi Lab',
      birthDate: '2002-01-01',
      name: 'Kohei Morita',
      university: 'Waseda University',
    },
    expirationDate: '2026-01-01T00:00:00Z',
    issuanceDate: '2023-01-01T00:00:00Z',
    issuer: 'did:example:issuer2',
  },
];
