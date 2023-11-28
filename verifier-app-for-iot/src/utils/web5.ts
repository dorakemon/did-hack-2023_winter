import {
  Web5,
  type RecordsWriteRequest,
  type RecordsWriteResponse,
  type RecordsQueryRequest,
  type RecordsQueryResponse,
  type RecordsReadResponse,
  type RecordsReadRequest,
  type RecordsDeleteResponse,
  type ProtocolsQueryResponse,
  type ProtocolsConfigureResponse,
  type ProtocolsConfigureRequest,
} from '@web5/api';

import { DWN_HOSTS } from '../config';

export type QueryDateSort = RecordsQueryRequest['message']['dateSort'];

export class Web5Store {
  static web5: Web5 | null;
  static userDid: string | null;
}

export const connectWeb5 = async () => {
  const result = await Web5.connect({
    sync: '5s',
    techPreview: {
      dwnEndpoints: DWN_HOSTS,
    },
  });
  Web5Store.web5 = result.web5;
  Web5Store.userDid = result.did;
  return {
    web5: result.web5,
    did: result.did,
  };
};

export const writeRecord = async (
  writeRequest: RecordsWriteRequest,
): Promise<RecordsWriteResponse> => {
  if (Web5Store.web5 === null) {
    throw new Error('Web5 is not connected');
  }
  return Web5Store.web5.dwn.records.write(writeRequest);
};

export const queryRecords = async (
  queryRequest: RecordsQueryRequest,
): Promise<RecordsQueryResponse> => {
  if (Web5Store.web5 === null) {
    throw new Error('Web5 is not connected');
  }
  return Web5Store.web5.dwn.records.query({ ...queryRequest });
};

export const readRecord = async ({
  from,
  filter,
}: {
  from?: string;
  filter: RecordsReadRequest['message']['filter'];
}): Promise<RecordsReadResponse> => {
  if (Web5Store.web5 === null) {
    throw new Error('Web5 is not connected');
  }
  return Web5Store.web5.dwn.records.read({
    ...(from && { from }),
    message: {
      filter,
    },
  });
};

export const deleteRecord = async ({
  from,
  recordId,
}: {
  from?: string;
  recordId: string;
}): Promise<RecordsDeleteResponse> => {
  if (Web5Store.web5 === null) {
    throw new Error('Web5 is not connected');
  }
  return Web5Store.web5.dwn.records.delete({
    ...(from && { from }),
    message: {
      recordId,
    },
  });
};

export const configureProtocol = async (
  definition: ProtocolsConfigureRequest['message']['definition'],
): Promise<ProtocolsConfigureResponse> => {
  if (Web5Store.web5 === null) {
    throw new Error('Web5 is not connected');
  }
  return Web5Store.web5.dwn.protocols.configure({
    message: {
      definition,
    },
  });
};

export const queryProtocols = async (
  protocol: string,
): Promise<ProtocolsQueryResponse> => {
  if (Web5Store.web5 === null) {
    throw new Error('Web5 is not connected');
  }
  return Web5Store.web5.dwn.protocols.query({
    message: {
      filter: {
        protocol,
      },
    },
  });
};

export const queryForAndSetProtocol = async (
  definition: ProtocolsConfigureRequest['message']['definition'],
) => {
  const { protocols, status } = await queryProtocols(definition.protocol);
  if (protocols.length) {
    return { protocols, status };
  } else {
    const { protocol, status } = await configureProtocol(definition);
    if (protocol) {
      if (Web5Store.userDid === null) {
        throw new Error('User DID is not set');
      }
      await protocol.send(Web5Store.userDid);
      console.log('successfully sent protocol');
    }
    return { protocol, status };
  }
};
