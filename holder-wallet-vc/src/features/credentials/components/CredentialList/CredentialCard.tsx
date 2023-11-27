import { Card, Typography } from '@mui/joy';
import React from 'react';

type CredentialCardProps = {
  cardTitle: string;
  onClick?: () => void;
};

export const CredentialCard: React.FC<CredentialCardProps> = ({
  cardTitle,
  onClick,
}) => {
  return (
    <Card variant="soft" color="primary" onClick={onClick}>
      <Typography sx={{ color: 'primary.softColor' }} fontWeight={600}>
        {cardTitle}
      </Typography>
    </Card>
  );
};
