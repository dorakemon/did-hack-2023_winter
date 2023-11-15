export const DingerProtocolDefinition = {
  protocol: "https://schema.org/Playlist",
  published: true,
  types: {
    ding: {
      schema: "ding",
      dataFormats: ["application/json"],
    },
  },
  structure: {
    ding: {
      $actions: [
        {
          who: "anyone",
          can: "write",
        },
        {
          who: "author",
          of: "ding",
          can: "read",
        },
        {
          who: "recipient",
          of: "ding",
          can: "read",
        },
      ],
    },
  },
};
