import { EllipticElGamalKeyPair, VCType } from '@/domain';

export const OpenerKey: EllipticElGamalKeyPair = {
  publicKey:
    'uiSkeuPI2wCWbSp4QdyFGXoancPqfpG1RBt_ih50fUrk0TqPTZ0GiN8oFPsL9X02p',
  secretKey: 'uzTVGn7GQp1y9kJVleS5zzgPnnsjQasSCcB7XTQo7qFE',
};
export const InitVCList: { uid: string; encrypted_uid: string; vc: VCType }[] =
  [
    {
      uid: '0df20905-6996-4408-8a20-7d00eaf1fa87',
      encrypted_uid:
        'ulnKWa-5KLrcYMMi27oCF46s_ShNKY6ZswbOx6UX3s_RaT7fyO6mFNyVWUH3QM3yr',
      vc: {
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
          created: '2023-12-01T03:43:41.042Z',
          cryptosuite: 'bbs-termwise-bound-signature-2023',
          proofPurpose: 'assertionMethod',
          proofValue:
            'utad_Jmug-MIbYq_Bky8BOfinyNjOSa1U1JAe5otBeD9WMib8xrPW0vLtoMKn2vInsT2mzPQLqZYHzvLCDBzJIn2oP7IKlQ58Yfdyi8J7qUKWs5rMo20IgCTrmVOdGjU5z3_8WnYTAawoP2M0cXVLQg',
          verificationMethod: 'did:example:issuer2#bls12_381-g2-pub001',
        },
      },
    },
    {
      uid: 'a1c82605-bb01-4830-8293-13f415c35302',
      encrypted_uid:
        'utpoZB4NSQVPo7E6HHLTcNSAOE2AQ8VSoDtTWjHOOIcFV-5WEUUYIJHENkB2RNTYO',
      vc: {
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
          birthDate: '2000-01-01',
          laboratory: 'Another Lab',
          university: 'Waseda University',
          faculty: 'Computer Science',
        },
        proof: {
          '@context': 'https://www.w3.org/ns/data-integrity/v1',
          type: 'DataIntegrityProof',
          created: '2023-12-01T03:43:41.042Z',
          cryptosuite: 'bbs-termwise-bound-signature-2023',
          proofPurpose: 'assertionMethod',
          proofValue:
            'uiip8URFVMcV7b07qSYFZ6p_GiwGjb5Z5f13Wfv_AR_EQFylWaunHKnfmorvl4uuwYTrYfAK1Rkg9WKodNLxuIDCnDdm-YDDkVx5w23vdvAF0Z3ZL5njDPRIYnGi9NHLTHI-8UAbzmswqQUiu5tX_Og',
          verificationMethod: 'did:example:issuer2#bls12_381-g2-pub001',
        },
      },
    },
    {
      uid: '908d29e9-9fd5-4e80-955f-8bcc3a833510',
      encrypted_uid:
        'uozoDtu16kaGZEVoU4E3nAJme4si_dH9pR9FkTQN-PgMe4GQauzLlll_56Dm4ZsBX',
      vc: {
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
          type: 'InvalidStudentCard',
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
          proofValue: 'invalid-proof',
          verificationMethod: 'did:example:issuer2#bls12_381-g2-pub001',
        },
      },
    },
  ];
