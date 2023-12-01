import { useEffect } from 'react';

import { CHALLENGE_EXPIRE_TIMEOUT } from '../config';
import { useReceiveVP } from '../hooks/useReceiveVP';
import { useWeb5Store } from '../provider/Web5Provider';
import { generateChallenge } from '../utils/challenge-generator';

export const useBackgroundProcess = () => {
  const { challenge, setChallenge } = useWeb5Store();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChallenge(generateChallenge());
    }, CHALLENGE_EXPIRE_TIMEOUT);

    return () => {
      clearInterval(intervalId);
    };
  }, [challenge, setChallenge]);

  const { dinged, dingedBy } = useReceiveVP();
};
