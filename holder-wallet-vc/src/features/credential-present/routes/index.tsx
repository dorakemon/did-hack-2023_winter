import { Grid } from '@mui/joy';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useVCFormatter } from '@/hooks/vc';
import { selectedVcAtom } from '@/store';

import { AttributeSelector } from '../components/AttributeSelector';
import { PresentCredentialHeader } from '../components/PresentCredentialHeader';
import { QrScanner } from '../components/QrScanner';

export const CredentialPresent = () => {
  const navigate = useNavigate();

  const [qrStatus, setQrStatus] = useState<'default' | 'scanned'>('default');
  const [toDid, setToDid] = useState<string>('');

  const selectedVc = useAtomValue(selectedVcAtom);
  const { formatVC } = useVCFormatter();

  if (!selectedVc) {
    navigate('/home');
    return null;
  }

  const keyValueList = (() => {
    const vc = formatVC(selectedVc);
    return vc.keyValueList;
  })();

  const scanHandler = (data: string) => {
    console.log(data);
    setQrStatus('scanned');
    setToDid('did:ion:asdasfdasdfasdfasdfasdfasdfasdfasdfasdf');
  };

  const presentButtonHandler = () => {
    navigate('/home');
  };
  const retryButtonHandler = () => {
    setQrStatus('default');
  };

  return (
    <Grid gap={3} flexDirection="column" container>
      <PresentCredentialHeader title="Present Credential" />
      <Grid gap={1} direction="column" container>
        <AttributeSelector keyValueList={keyValueList} />
        <QrScanner
          status={qrStatus}
          onScan={scanHandler}
          did={toDid}
          onPresent={presentButtonHandler}
          onRetry={retryButtonHandler}
        />
      </Grid>
    </Grid>
  );
};
