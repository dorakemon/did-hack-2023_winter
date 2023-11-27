import { Grid } from '@mui/joy';

import { AttributeSelector } from '../components/AttributeSelector';
import { PresentCredentialHeader } from '../components/PresentCredentialHeader';
import { QrScanner } from '../components/QrScanner';

export const CredentialPresent = () => {
  return (
    <Grid gap={3} flexDirection="column" container>
      <PresentCredentialHeader title="Present Credential" />
      <Grid gap={1} direction="column" container>
        <AttributeSelector
          keyValueList={[
            { key: 'key1', value: 'value1' },
            { key: 'key2', value: 'value2' },
            { key: 'key3', value: 'value3' },
            { key: 'key4', value: 'value4' },
          ]}
        />
        <QrScanner
          status="default"
          onScan={(data) => {
            console.log(data);
          }}
          did="did:ion:asdasfd"
        />
        <QrScanner
          status="scanned"
          onScan={() => {}}
          did="did:ion:asdasfdasdfasdfasdfasdfasdfasdfasdfasdf"
        />
      </Grid>
    </Grid>
  );
};
