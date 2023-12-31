import { Grid } from '@mui/joy';
import { useAtomValue } from 'jotai';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { OpenerKey } from '@/fixtures';
import { useVCFormatter, useVCLogics } from '@/hooks/vc';
import { exampleDIDDocs, exampleKeyPairs } from '@/hooks/vc/materials';
import { useSubmitDing } from '@/hooks/web5';
import { selectedVcAtom } from '@/store';
import { formatQr } from '@/utils/formatQr';

import { AttributeSelector } from '../components/AttributeSelector';
import { PresentCredentialHeader } from '../components/PresentCredentialHeader';
import { QrScanner } from '../components/QrScanner';

export const CredentialPresent = () => {
  const navigate = useNavigate();

  const [revealAttributes, setRevealAttributes] = useState<string[]>([]);
  const [qrStatus, setQrStatus] = useState<'default' | 'scanned'>('default');
  const [toDid, setToDid] = useState<string>('');
  const [challenge, setChallenge] = useState<string>('');
  const [presentButtonLoading, setPresentButtonLoading] = useState(false);

  const selectedVc = useAtomValue(selectedVcAtom);

  const { formatVC } = useVCFormatter();
  const { generateVP, verifyVp } = useVCLogics({
    didDocs: exampleDIDDocs,
    keyPairs: exampleKeyPairs,
  });
  const { handleSubmit } = useSubmitDing();

  const selectAttributesHander = useCallback(
    (attrs: string[]) => {
      setRevealAttributes(attrs);
    },
    [setRevealAttributes],
  );

  const scanHandler = useCallback((data: string) => {
    console.log(data);
    const formattedQr = formatQr(data);
    if (!formattedQr) {
      alert('invalid qr');
      return;
    }
    setQrStatus('scanned');
    setToDid(formattedQr.toDid);
    setChallenge(formattedQr.challenge);
  }, []);

  const removeAttributesFromVc = useCallback(() => {
    const revealDoc = JSON.parse(JSON.stringify(selectedVc?.vc));
    const keys = Object.keys(revealDoc.credentialSubject);
    keys.forEach((key) => {
      if (!['type', ...revealAttributes].includes(key)) {
        delete revealDoc.credentialSubject[key];
      }
    });

    return revealDoc;
  }, [revealAttributes, selectedVc]);

  const presentButtonHandler = useCallback(async () => {
    setPresentButtonLoading(true);
    try {
      console.log(revealAttributes);
      const vp = await generateVP(
        selectedVc?.vc,
        removeAttributesFromVc(),
        challenge,
        selectedVc?.uid ?? '',
        OpenerKey.publicKey,
      );
      const result = await verifyVp(vp, challenge);
      console.log(vp);
      console.log(result);
      handleSubmit(toDid, JSON.stringify(vp));
      navigate('/home');
    } catch (e) {
      console.error(e);
    } finally {
      setPresentButtonLoading(false);
    }
  }, [
    revealAttributes,
    generateVP,
    selectedVc,
    removeAttributesFromVc,
    challenge,
    verifyVp,
    handleSubmit,
    toDid,
    navigate,
  ]);

  const retryButtonHandler = useCallback(() => {
    setQrStatus('default');
  }, []);

  if (!selectedVc) {
    navigate('/home');
    return null;
  }

  const keyValueList = (() => {
    const vc = formatVC(selectedVc.vc);
    return vc.keyValueList;
  })();

  return (
    <Grid gap={3} flexDirection="column" container>
      <PresentCredentialHeader title="Present Credential" />
      <Grid gap={1} direction="column" container>
        <AttributeSelector
          keyValueList={keyValueList}
          onSelect={selectAttributesHander}
        />
        <QrScanner
          status={qrStatus}
          onScan={scanHandler}
          did={toDid}
          onPresent={presentButtonHandler}
          onRetry={retryButtonHandler}
          presentButtonLoading={presentButtonLoading}
        />
      </Grid>
    </Grid>
  );
};
