import { useState, useEffect } from 'react';

import { VCProtocolDefinition } from '../config/web5-protocol';
import { useWeb5Store } from '../provider/Web5Provider';
import { connectWeb5, queryForAndSetProtocol } from '../utils/web5';

const useSetUpWeb5 = () => {
  const { setUserDid } = useWeb5Store();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const connectToWeb5 = async () => {
      try {
        setIsLoading(true);
        const { did: userDid } = await connectWeb5();
        setUserDid(userDid);
        await queryForAndSetProtocol(VCProtocolDefinition);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    connectToWeb5();
  }, [setUserDid]);

  return { error, isLoading };
};

export default useSetUpWeb5;
