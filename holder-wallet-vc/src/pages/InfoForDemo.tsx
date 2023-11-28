import { Grid, Textarea, Typography } from '@mui/joy';

import { exampleDIDDocs, exampleKeyPairs } from '@/hooks/vc/materials';
import { useSetupWeb5 } from '@/hooks/web5';

export const InfoForDemo = () => {
  const { did } = useSetupWeb5();

  return (
    <Grid container gap={3} direction="column">
      <Typography level="h3">Info for Demo</Typography>
      <Grid container direction="column">
        <label htmlFor="my-did">
          <Typography level="body-md">My DID</Typography>
        </label>
        <Textarea
          slotProps={{
            textarea: {
              id: 'my-did',
            },
          }}
          defaultValue={did ?? ''}
          maxRows={8}
          size="sm"
        />
      </Grid>
      <Grid container direction="column">
        <label htmlFor="did-doc">
          <Typography level="body-md">DID DOC</Typography>
        </label>
        <Textarea
          slotProps={{
            textarea: {
              id: 'did-doc',
            },
          }}
          value={exampleDIDDocs ?? ''}
          maxRows={15}
          size="sm"
        />
      </Grid>
      <Grid container direction="column">
        <label htmlFor="did-doc">
          <Typography level="body-md">Example Keys</Typography>
        </label>
        <Textarea
          slotProps={{
            textarea: {
              id: 'did-doc',
            },
          }}
          value={exampleKeyPairs ?? ''}
          maxRows={15}
          size="sm"
        />
      </Grid>
    </Grid>
  );
};
