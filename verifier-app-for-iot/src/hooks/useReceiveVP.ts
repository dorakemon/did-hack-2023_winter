import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useSound from 'use-sound';

import boopSfx from '../../sounds/boop.mp3';
import correctSfx from '../../sounds/correct.mp3';
import { VCProtocolDefinition } from '../config/web5-protocol';
import { useWeb5Store } from '../provider/Web5Provider';
import { queryRecords } from '../utils/web5';

import { useElectronIPC } from './ipc/useElectronIPC';
import { useVerifyVPForDoor } from './vc/verifyVPForDoor';

// import { useVCLogics } from '@/hooks/vc/useVCLogics';

export const useReceiveVP = () => {
  const { userDid } = useWeb5Store();

  const [dinged, setDinged] = useState<string[]>([]);
  const [dingedBy, setDingedBy] = useState<string[]>([]);

  const { runOpenDoor } = useElectronIPC();
  const { verifyVPForDoor } = useVerifyVPForDoor();

  const [boopSound] = useSound(boopSfx);
  const [correctSound] = useSound(correctSfx);

  const fetchDings = useCallback(async () => {
    if (!userDid) return;
    const { records, status } = await queryRecords({
      from: userDid,
      message: {
        filter: {
          protocol: VCProtocolDefinition.protocol,
        },
        dateSort: 'createdDescending',
      },
    });
    console.log(records, status);

    if (status.code !== 200 || !records) {
      console.error('Failed to query dings', status);
      return;
    }

    const newDinged: string[] = [];
    const newDingedBy: string[] = [];

    for (const record of records) {
      const { dinger, note } = await record.data.json();
      const ding = {
        id: record.id,
        did: dinger === userDid ? record.recipient : dinger,
        note: note,
        timestamp: new Date(record.dateCreated).toLocaleString(),
      };
      if (dinger === userDid) {
        newDinged.push(ding.note);
      } else {
        newDingedBy.push(ding.note);
      }
    }
    setDinged(newDinged);
    setDingedBy(newDingedBy);
    // console.log({ dingedBy: dingedBy.length, newDingedBy: newDingedBy.length });
    // New VP Has Come
    if (dingedBy.length !== newDingedBy.length && dingedBy.length > 0) {
      toast.info('new VP is received');
      console.log(dingedBy.length, newDingedBy.length);
      const latestVP = JSON.parse(newDingedBy[0]);
      console.log(latestVP);
      const { keyValueList, error } = verifyVPForDoor(latestVP);
      if (error) {
        toast.error(error);
        boopSound();
        return;
      }
      correctSound();
      const formattedKeyValueList = keyValueList.map(
        (item) => `${item.key}: ${item.value} \n`,
      );
      toast.info(`VP is Valid \n${formattedKeyValueList}`);
      console.log(keyValueList);
      runOpenDoor();
    }
  }, [
    userDid,
    dingedBy.length,
    verifyVPForDoor,
    correctSound,
    runOpenDoor,
    boopSound,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDings();
    }, 2000);

    return () => clearInterval(interval);
  }, [fetchDings]);

  return { dinged, dingedBy };
};
