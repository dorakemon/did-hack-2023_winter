import { Grid } from '@mui/joy';
import React from 'react';

import { CredentialCard } from './CredentialCard';

export type CredentialListTypes = {
  cardTitles: string[];
  onCardClick: (index: number) => void;
};

export const CredentialList: React.FC<CredentialListTypes> = ({
  cardTitles,
  onCardClick,
}) => {
  return (
    <Grid gap={0.5} direction="column" container>
      {cardTitles.map((cardTitle, index) => (
        <CredentialCard
          key={index}
          cardTitle={cardTitle}
          onClick={() => onCardClick(index)}
        />
      ))}
    </Grid>
  );
};
