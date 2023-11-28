import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import HighlightOffOutlined from '@mui/icons-material/HighlightOffOutlined';
import { Box, Grid, IconButton, Typography } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type DetailHeaderProps = {
  title: string;
  backLink: string;
  verifyStatus?: 'valid' | 'invalid';
};

export const DetailHeader: React.FC<DetailHeaderProps> = ({
  title,
  backLink,
  verifyStatus,
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
      <Grid container alignItems="center">
        <Typography level="h3" fontWeight={600} padding="0 8px">
          {title}
        </Typography>
        {verifyStatus === 'invalid' && <HighlightOffOutlined color="error" />}
        {verifyStatus === 'valid' && <CheckCircleOutlined color="success" />}
      </Grid>
    </Box>
  );
};
