import { Grid } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

import { AddVCButton } from '../components/AddVCButton';
import { CredentialList } from '../components/CredentialList';
import { CredentialListHeader } from '../components/CredentialListHeader';

export const Credentials = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid gap={3} direction="column" container>
        <CredentialListHeader />
        <CredentialList
          cardTitles={['Student Card', 'Mynumber Card']}
          onCardClick={() => {
            navigate('/detail');
          }}
        />
      </Grid>
      <AddVCButton />
    </>
  );
};
