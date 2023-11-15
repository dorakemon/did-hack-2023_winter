import { useState, useEffect } from "react";
import { Web5 } from "@web5/api";
import { DWN_HOSTS } from "../config";
import ms from "ms";
import { webcrypto } from "node:crypto";
import { connectWeb5, queryForAndSetProtocol } from "../utils/web5";
import { DingerProtocolDefinition } from "../config/web5-protocol";

const useSetUpWeb5 = () => {
  // @ts-ignore
  // if (!globalThis.crypto) globalThis.crypto = webcrypto;

  const [web5, setWeb5] = useState<Web5 | null>(null);
  const [did, setDid] = useState<string | null>(null);
  const [error, setError] = useState("");
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
