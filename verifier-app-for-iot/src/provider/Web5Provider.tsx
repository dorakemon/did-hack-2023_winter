// Web5Context.tsx
import { Web5 } from '@web5/api';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Web5ContextType {
  web5: Web5 | null;
  userDid: string | null;
  challenge: string;
  setWeb5: (web5: Web5) => void;
  setUserDid: (userDid: string) => void;
  setChallenge: (challenge: string) => void;
}

export const Web5Context = createContext<Web5ContextType | undefined>(
  undefined,
);

export const Web5Provider = ({ children }: { children: ReactNode }) => {
  const [web5, setWeb5] = useState<Web5 | null>(null);
  const [userDid, setUserDid] = useState<string | null>(null);
  const [challenge, setChallenge] = useState<string>('');

  return (
    <Web5Context.Provider
      value={{
        web5,
        userDid,
        challenge,
        setWeb5,
        setUserDid,
        setChallenge,
      }}
    >
      {children}
    </Web5Context.Provider>
  );
};

export const useWeb5Store = () => {
  const context = useContext(Web5Context);

  if (!context) {
    throw new Error('useWeb5 must be used within a Web5Provider');
  }

  return context;
};
