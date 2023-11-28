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
} from '@web5/api/browser';
// import { Web5 } from 'https://cdn.jsdelivr.net/npm/@web5/api@0.8.2/dist/browser.mjs';

export type QueryDateSort = RecordsQueryRequest['message']['dateSort'];

export let web5: Web5;
export let userDid: string;

export async function connectWeb5() {
  ({ web5, did: userDid } = await Web5.connect({
    sync: '5s',
    // techPreview: {
    //   dwnEndpoints: DWN_HOSTS,
    // },
  }));
  return { web5, userDid };
}

export async function writeRecord(
  writeRequest: RecordsWriteRequest,
): Promise<RecordsWriteResponse> {
  return web5.dwn.records.write(writeRequest);
}

export async function queryRecords(
  queryRequest: RecordsQueryRequest,
): Promise<RecordsQueryResponse> {
  return web5.dwn.records.query({ ...queryRequest });
}

export async function readRecord({
  from,
  filter,
}: {
  from?: string;
  filter: RecordsReadRequest['message']['filter'];
}): Promise<RecordsReadResponse> {
  return web5.dwn.records.read({
    ...(from && { from }),
    message: {
      filter,
    },
  });
}

export async function deleteRecord({
  from,
  recordId,
}: {
  from?: string;
  recordId: string;
}): Promise<RecordsDeleteResponse> {
  return web5.dwn.records.delete({
    ...(from && { from }),
    message: {
      recordId,
    },
  });
}

export async function configureProtocol(
  definition: ProtocolsConfigureRequest['message']['definition'],
): Promise<ProtocolsConfigureResponse> {
  return web5.dwn.protocols.configure({
    message: {
      definition,
    },
  });
}

export async function queryProtocols(
  protocol: string,
): Promise<ProtocolsQueryResponse> {
  return web5.dwn.protocols.query({
    message: {
      filter: {
        protocol,
      },
    },
  });
}

export async function queryForAndSetProtocol(
  definition: ProtocolsConfigureRequest['message']['definition'],
) {
  const { protocols, status } = await queryProtocols(definition.protocol);
  if (protocols.length) {
    return { protocols, status };
  } else {
    const { protocol, status } = await configureProtocol(definition);
    if (protocol) {
      await protocol.send(userDid);
    }
    return { protocol, status };
  }
}
