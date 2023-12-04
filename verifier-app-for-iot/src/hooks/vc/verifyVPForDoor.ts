import { exampleDIDDocs, exampleKeyPairs } from './materials';
import { useVCLogics } from './useVCLogics';

import { KeyValueList, VPType } from '@/domain';
import { useWeb5Store } from '@/provider/Web5Provider';

export const useVerifyVPForDoor = () => {
  const { verifyVp } = useVCLogics({
    didDocs: exampleDIDDocs,
    keyPairs: exampleKeyPairs,
  });
  const { challenge } = useWeb5Store();

  const verifyVPForDoor = (vp: VPType) => {
    const { proof } = vp;
    const { credentialSubject } = vp.verifiableCredential;

    const keyValueList: KeyValueList = Object.keys(credentialSubject)
      .filter((key) => key !== 'type')
      .map((key: string) => {
        return {
          key,
          value: credentialSubject[key] as string,
        };
      });

    let error: string | null = null;
    try {
      if (challenge !== proof.challenge) {
        throw new Error('Challenge is not matched');
      }
      if (credentialSubject['http://example.org/laboratory'] !== 'Sako Lab') {
        throw new Error('Laboratory is not matched');
      }
      const res = verifyVp(vp, proof.challenge);
      console.log(res);
    } catch (e) {
      error = e.message;
      console.log(e);
    }

    return {
      keyValueList,
      error,
    };
  };

  return {
    verifyVPForDoor,
  };
};
