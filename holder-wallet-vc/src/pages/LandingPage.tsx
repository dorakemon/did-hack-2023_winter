import { Typography, Button, Container, Box, Grid } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

import image from '../assets/landing-image.png';

export const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '16px',
        }}
      >
        <Grid container>
          <Typography level="h1">Sako Lab Wallet</Typography>
          <Typography level="body-lg" color="neutral">
            Store and manage all your identity documents
            <br />※ Only for demo
          </Typography>
        </Grid>
        <Box
          sx={{
            width: '256px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={image} alt="landingImage" width="100%" />
        </Box>
        <Button variant="solid" fullWidth onClick={navigateToHome}>
          Get started
        </Button>
      </Box>
    </Container>
  );
};
