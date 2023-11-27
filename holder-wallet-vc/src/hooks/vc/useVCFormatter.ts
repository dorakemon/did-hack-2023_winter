import { KeyValueList, VCType } from '@/domain';

export const useVCFormatter = () => {
  const formatVC = (vc: VCType) => {
    const { credentialSubject } = vc;

    const keyValueList: KeyValueList = Object.keys(credentialSubject)
      .filter((key) => key !== 'type')
      .map((key: string) => {
        return {
          key,
          value: credentialSubject[key] as string,
        };
      });

    const title = vc.credentialSubject.type;

    return {
      title,
      keyValueList,
    };
  };

  return {
    formatVC,
  };
};
