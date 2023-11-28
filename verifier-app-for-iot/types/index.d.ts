// declare module 'jsonld';
declare module 'jsonld/jsonld-spec' {
  export interface Url {}

  export interface RemoteDocument {
    contextUrl?: string;
    document: any; // Replace 'any' with a more specific type if possible
    documentUrl: Url;
  }

  export interface JsonLd {}

  export namespace documentLoaders {
    function xhr(): (
      url: Url,
      callback: (err: Error, remoteDoc: RemoteDocument) => void,
    ) => Promise<RemoteDocument>;
  }

  export function compact(doc: any, context: any): Promise<any>;
  // Add other methods from jsonld as needed
}

declare module 'jsonld-signatures';
declare module 'jsonld';
declare module '*.json' {
  const value: any;
  export default value;
}
