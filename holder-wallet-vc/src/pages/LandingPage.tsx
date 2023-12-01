import { Typography, Button, Container, Box, Grid, Link } from '@mui/joy';
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
          height: '95vh',
          gap: '16px',
        }}
      >
        <Grid container direction="column">
          <Typography level="h1">Sako Lab Wallet</Typography>
          <Typography level="body-lg" color="neutral">
            Manage all your verifiable credentials stored on your DWN
            <br />
          </Typography>
          <Typography level="body-md" color="danger">
            ※ Only for demo
          </Typography>
          <Link href="/info">Details for demo</Link>
          <Link href="/opener" style={{ color: 'yellowgreen' }}>
            Opener demo
          </Link>
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
