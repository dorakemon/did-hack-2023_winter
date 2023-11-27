import { VCType } from '@/domain';

export const InitVCList: VCType[] = [
  {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://www.w3.org/ns/data-integrity/v1',
      'https://schema.org/',
      {
        faculty: {
          '@id': 'http://example.org/faculty',
        },
        laboratory: {
          '@id': 'http://example.org/laboratory',
        },
      },
    ],
    id: 'http://example.org/credentials/person/2',
    type: 'VerifiableCredential',
    issuer: 'did:example:issuer2',
    issuanceDate: '2023-01-01T00:00:00Z',
    expirationDate: '2026-01-01T00:00:00Z',
    credentialSubject: {
      type: 'StudentCard',
      name: 'Halu Kimura',
      birthDate: '2000-01-01',
      laboratory: 'Sako Lab',
      university: 'Waseda University',
      faculty: 'Computer Science',
    },
    proof: {
      '@context': 'https://www.w3.org/ns/data-integrity/v1',
      type: 'DataIntegrityProof',
      created: '2023-11-27T03:43:41.042Z',
      cryptosuite: 'bbs-termwise-signature-2023',
      proofPurpose: 'assertionMethod',
      proofValue:
        'uglirZO_cbMgueXFdvdDCJ22kM1bdwTPH3Pz1v-AKIc5CNZ7rYixl4Gu-lIxvk8uvZWKqL8z7I7kx_wcqpMvVd--NLW3Y-xQK67PjX3ysum05mP7fk5KSZrHEecEFqqz4g-oSQXwy-qf7NtBaPCb-Aw',
      verificationMethod: 'did:example:issuer2#bls12_381-g2-pub001',
    },
  },
  {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://www.w3.org/ns/data-integrity/v1',
      'https://schema.org/',
      {
        faculty: {
          '@id': 'http://example.org/faculty',
        },
        laboratory: {
          '@id': 'http://example.org/laboratory',
        },
      },
    ],
    id: 'http://example.org/credentials/person/2',
    type: 'VerifiableCredential',
    issuer: 'did:example:issuer2',
    issuanceDate: '2023-01-01T00:00:00Z',
    expirationDate: '2026-01-01T00:00:00Z',
    credentialSubject: {
      type: 'StudentCard',
      name: 'Kohei Morita',
      birthDate: '2001-12-31',
      laboratory: 'Malicious Lab',
      university: 'Waseda University',
      faculty: 'Computer Science',
    },
    proof: {
      '@context': 'https://www.w3.org/ns/data-integrity/v1',
      type: 'DataIntegrityProof',
      created: '2023-11-27T03:44:49.921Z',
      cryptosuite: 'bbs-termwise-signature-2023',
      proofPurpose: 'assertionMethod',
      proofValue:
        'uq9VqnElaqq9tq550gyClfth-NstG4Ss_j9lw7FHYqiV6lmN96l2fJBgS2dLI9NMTCKDBglaiLszpnh_89bO-YyXnrtzLLLHPcZVRL27T-ENq2GINdAuBuBoQi_GdwBjVvEiECXCQ58ER9KcEd-ACDQ',
      verificationMethod: 'did:example:issuer2#bls12_381-g2-pub001',
    },
  },
];
