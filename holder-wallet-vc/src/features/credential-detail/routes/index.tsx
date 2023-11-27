import { Grid } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

import { CredentialData } from '../components/CredentialData';
import { CredentialDetailHeader } from '../components/CredentialDetailHeader';
import { JsonRawData } from '../components/JsonRawData';
import { PresentButton } from '../components/PresentButton';
import { VerifyAlert } from '../components/VerifyAlert';

export const CredentialDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid gap={3} container>
        <CredentialDetailHeader title="Credential Name" />
        <VerifyAlert
          status="yet"
          onClick={() => {
            console.log('verify logic');
          }}
        />
        <Grid gap={1} direction="column" container>
          <CredentialData
            keyValueList={[
              { key: 'key', value: 'value' },
              { key: 'key344444', value: 'value' },
              { key: 'key23444', value: 'valueasdfasdfasdf' },
              { key: 'ke4444444', value: 'valueasdfasdfasdfasdfasdf' },
            ]}
          />
          <JsonRawData
            data={{ hello: 'world', parent: { child: { grandghild: 'yes' } } }}
          />
        </Grid>
      </Grid>
      <PresentButton onClick={() => navigate('/present')} />
    </>
  );
};
