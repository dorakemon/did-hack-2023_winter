import { Grid } from '@mui/joy';
import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useVCFormatter } from '@/hooks/vc';
import { selectedVcAtom, vcListFilteredAtom } from '@/store';

import { AddVCButton } from '../components/AddVCButton';
import { CredentialList } from '../components/CredentialList';
import { CredentialListHeader } from '../components/CredentialListHeader';

export const Credentials = () => {
  const navigate = useNavigate();
  const vcListFiltered = useAtomValue(vcListFilteredAtom);
  const setSelectedVc = useSetAtom(selectedVcAtom);

  const { formatVC } = useVCFormatter();

  const cardTitles = vcListFiltered.map((vc) => formatVC(vc.vc).title);

  const cardClickHandler = useCallback(
    (index: number) => {
      setSelectedVc(vcListFiltered[index]);
      navigate('/detail');
    },
    [navigate, setSelectedVc, vcListFiltered],
  );

  return (
    <>
      <Grid gap={3} direction="column" container>
        <CredentialListHeader />
        <CredentialList
          cardTitles={cardTitles}
          onCardClick={cardClickHandler}
        />
      </Grid>
      <AddVCButton />
    </>
  );
};
