import { Typography, Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import image from "../assets/landing-image.png";

export const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sako Lab Wallet
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Store and manage all your identity documents
          <br />
          Only for demo
        </Typography>
        <Box
          sx={{
            width: "256px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={image} alt="landingImage" width="100%" />
        </Box>
        <Button variant="contained" size="large" onClick={navigateToHome}>
          Get started
        </Button>
      </Box>
    </Container>
  );
};
