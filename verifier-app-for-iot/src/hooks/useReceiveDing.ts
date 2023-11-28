import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { VCProtocolDefinition } from '../config/web5-protocol';
import { useWeb5Store } from '../provider/Web5Provider';
import { queryRecords } from '../utils/web5';

import { useElectronIPC } from './ipc/useElectronIPC';

export const useReceiveDing = () => {
  const { userDid } = useWeb5Store();

  const [dinged, setDinged] = useState<string[]>([]);
  const [dingedBy, setDingedBy] = useState<string[]>([]);

  const { runOpenDoor } = useElectronIPC();

  const fetchDings = useCallback(async () => {
    if (!userDid) return;
    console.log(userDid);
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

    let latestRecord = null;

    for (const record of records) {
      const { dinger, note } = await record.data.json();
      if (!latestRecord) {
        latestRecord = note;
      }
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
    console.log({ dingedBy: dingedBy.length, newDingedBy: newDingedBy.length });
    if (dingedBy.length !== newDingedBy.length && dingedBy.length > 0) {
      console.log('new dinged by');
      toast.info('new message received');
      console.log(dingedBy.length, newDingedBy.length);
      console.log(latestRecord);
      runOpenDoor();
    }
  }, [dingedBy, userDid, runOpenDoor]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDings();
    }, 2000);

    return () => clearInterval(interval);
  }, [fetchDings]);

  return { dinged, dingedBy };
};
