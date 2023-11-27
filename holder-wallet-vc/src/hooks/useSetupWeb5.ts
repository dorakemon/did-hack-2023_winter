import { Web5 } from '@web5/api';
import { useState, useEffect } from 'react';

import { DingerProtocolDefinition } from '../config/web5-protocol';
import { connectWeb5, queryForAndSetProtocol } from '../utils/web5';

const useSetUpWeb5 = () => {
  const [web5, setWeb5] = useState<Web5 | null>(null);
  const [did, setDid] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const connectToWeb5 = async () => {
      try {
        setIsLoading(true);
        const { web5, userDid } = await connectWeb5();
        await queryForAndSetProtocol(DingerProtocolDefinition);
        setWeb5(web5);
        setDid(userDid);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    connectToWeb5();
  }, []);

  return { web5, did, error, isLoading };
};

export default useSetUpWeb5;
