import { Box, Grid } from '@mui/joy';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useVCFormatter } from '@/hooks/vc';
import { selectedVcAtom } from '@/store';

import { CredentialData } from '../components/CredentialData';
import { CredentialDetailHeader } from '../components/CredentialDetailHeader';
import { JsonRawData } from '../components/JsonRawData';
import { PresentButton } from '../components/PresentButton';
import { VerifyAlert, VerifyAlertStatus } from '../components/VerifyAlert';

export const CredentialDetail = () => {
  const navigate = useNavigate();

  const selectedVc = useAtomValue(selectedVcAtom);
  const { formatVC } = useVCFormatter();

  const [verifyStatus, setVerifyStatus] = useState<VerifyAlertStatus>('yet');

  if (!selectedVc) {
    navigate('/home');
    return null;
  }

  const keyValueList = (() => {
    const vc = formatVC(selectedVc);
    return vc.keyValueList;
  })();

  const verifyButtonHandler = () => {
    setVerifyStatus('invalid');
  };

  return (
    <Grid gap={3} direction="column" container>
      <CredentialDetailHeader title={formatVC(selectedVc).title} />
      <VerifyAlert status={verifyStatus} onClick={verifyButtonHandler} />
      <Grid gap={1} direction="column" container>
        <CredentialData keyValueList={keyValueList} />
        <JsonRawData data={selectedVc} />
      </Grid>
      <Box sx={{ marginTop: 'auto' }}>
        <PresentButton onClick={() => navigate('/present')} />
      </Box>
    </Grid>
  );
};
