import { ellipticElGamalDecrypt } from '@dorakemon/jsonld-proofs';
import { Grid, Textarea, Typography, Button } from '@mui/joy';
import { useState } from 'react';

import { InitVCList, OpenerKey } from '@/fixtures';

import SampleVP from '../../SampleVP.json';

export const OpenerDemo = () => {
  const [inputVP, setInputVP] = useState(JSON.stringify(SampleVP, null, 2));
  const [RevokedVP, setRevokedVP] = useState(false);
  const [openedEncryptedUid, setOpenedEncryptedUid] = useState('');
  const [openedVC, setOpenedVC] = useState('');

  const handleRevokeClick = async () => {
    const decryptedValue =
      JSON.parse(inputVP).proof['https://sako-lab.jp/schemas#encrypted_uid'];
    const encryptedUid = await ellipticElGamalDecrypt(
      OpenerKey.secretKey,
      decryptedValue,
    );
    console.log(encryptedUid);
    setOpenedEncryptedUid(encryptedUid);

    const vc = InitVCList.filter((v) => v.encrypted_uid === encryptedUid)[0];
    setOpenedVC(JSON.stringify(vc.vc, null, 2));

    setRevokedVP(true);
  };

  return (
    <Grid container gap={3} direction="column">
      <Typography level="h3">Opener Demo</Typography>
      <Grid container direction="column">
        <label htmlFor="revoke-vc">
          <Typography level="body-md">Presnted VP</Typography>
        </label>
        <Textarea
          slotProps={{
            textarea: {
              id: 'revoke-vc',
            },
          }}
          value={inputVP}
          minRows={15}
          maxRows={15}
          size="sm"
          onChange={(e) => setInputVP(e.target.value)}
        />
        <label htmlFor="opener-secret-key">
          <Typography level="body-md">Opener Secret Key</Typography>
        </label>
        <Textarea
          slotProps={{
            textarea: {
              id: 'opener-secret-key',
            },
          }}
          value={OpenerKey.secretKey}
          maxRows={1}
          size="sm"
        />
      </Grid>
      <Button onClick={handleRevokeClick}>Revoke Anonymity</Button>

      {RevokedVP && (
        <Grid container direction="column">
          <label htmlFor="encrypetd-uid">
            <Typography level="body-md">UID Data</Typography>
          </label>
          <Textarea
            slotProps={{
              textarea: {
                id: 'encrypetd-uid',
              },
            }}
            value={openedEncryptedUid}
            maxRows={15}
            size="sm"
          />
          <label htmlFor="opened-vc">
            <Typography level="body-md">Opened VC</Typography>
          </label>
          <Textarea
            slotProps={{
              textarea: {
                id: 'opened-vc',
              },
            }}
            value={openedVC}
            maxRows={15}
            size="sm"
          />
        </Grid>
      )}
    </Grid>
  );
};
