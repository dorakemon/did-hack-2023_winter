import { useEffect, useState } from 'react';

import { VCProtocolDefinition } from '@/config/web5-protocol';
import { queryRecords, userDid } from '@/utils/web5';

enum DateSort {
  CreatedAscending = 'createdAscending',
  CreatedDescending = 'createdDescending',
  PublishedAscending = 'publishedAscending',
  PublishedDescending = 'publishedDescending',
}

export const useReceiveDing = () => {
  const [dinged, setDinged] = useState<string[]>([]);
  const [dingedBy, setDingedBy] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDings();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const fetchDings = async () => {
    const { records, status } = await queryRecords({
      from: userDid,
      message: {
        filter: {
          protocol: VCProtocolDefinition.protocol,
        },
        dateSort: DateSort.CreatedDescending,
      },
    });

    if (status.code !== 200 || !records) {
      console.error('Failed to query dings', status);
      return;
    }

    const newDinged: string[] = [];
    const newDingedBy: string[] = [];

    for (const record of records) {
      const { dinger, note } = await record.data.json();
      console.log(note);
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
  };

  return { dinged, dingedBy };
};
