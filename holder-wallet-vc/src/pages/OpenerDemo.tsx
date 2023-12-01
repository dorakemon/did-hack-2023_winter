import { Grid, Textarea, Typography, Button } from '@mui/joy';
import { useState } from 'react';

import { exampleDIDDocs } from '@/hooks/vc/materials';
import { useSetupWeb5 } from '@/hooks/web5';

export const OpenerDemo = () => {
  const { did } = useSetupWeb5();
  const [RevokedVP, setRevokedVP] = useState(false);

  const handleRevokeClick = () => {
    setRevokedVP(true);
  };

  return (
    <Grid container gap={3} direction="column">
      <Typography level="h3">Opener Demo</Typography>
      <Grid container direction="column">
        <label htmlFor="did-doc">
          <Typography level="body-md">Presnted VP</Typography>
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
      <Button onClick={handleRevokeClick}>Revoke Anonimity</Button>

      {RevokedVP && (
        <Grid container direction="column">
          <label htmlFor="did-doc">
            <Typography level="body-md">Revoked VP information</Typography>
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
      )}
    </Grid>
  );
};
