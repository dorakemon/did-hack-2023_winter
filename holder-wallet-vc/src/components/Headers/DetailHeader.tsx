import ArrowBack from '@mui/icons-material/ArrowBack';
import { Box, IconButton, Typography } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type DetailHeaderProps = {
  title: string;
  backLink: string;
};

export const DetailHeader: React.FC<DetailHeaderProps> = ({
  title,
  backLink,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ padding: '8px, 0px, 8px, 0px' }}
      display="flex"
      gap="8px"
      flexDirection={'column'}
      alignItems={'start'}
    >
      <IconButton onClick={() => navigate(backLink)} color="neutral">
        <ArrowBack />
      </IconButton>
      <Typography level="h3" fontWeight={600} padding="0 8px">
        {title}
      </Typography>
    </Box>
  );
};
