export const DingerProtocolDefinition = {
  protocol: 'https://schema.org/Playlist',
  published: true,
  types: {
    ding: {
      schema: 'ding',
      dataFormats: ['application/json'],
    },
  },
  structure: {
    ding: {
      $actions: [
        {
          who: 'anyone',
          can: 'write',
        },
        {
          who: 'author',
          of: 'ding',
          can: 'read',
        },
        {
          who: 'recipient',
          of: 'ding',
          can: 'read',
        },
      ],
    },
  },
};

export const VCProtocolDefinition = {
  protocol: 'https://www.w3.org/ns/credentials/v2',
  published: true,
  types: {
    vp: {
      schema: 'vp',
      dataFormats: ['application/json'],
    },
  },
  structure: {
    vp: {
      $actions: [
        {
          who: 'anyone',
          can: 'write',
        },
        {
          who: 'author',
          of: 'vp',
          can: 'read',
        },
        {
          who: 'recipient',
          of: 'vp',
          can: 'read',
        },
      ],
    },
  },
};
