import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  IconButton,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const PresentSuccessScreen: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };
  const navigateToCredential = () => {
    navigate("/credential");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // This aligns to the top of the viewport
        height: "100vh",
        pt: 8, // Adds padding to the top to move the card up
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 8, // Adjusts the position of the back button
          left: 8,
        }}
      >
        <Typography
          variant="subtitle1"
          onClick={navigateToCredential}
          sx={{ cursor: "pointer" }}
        >
          <IconButton onClick={navigateToCredential} aria-label="go back">
            <ArrowBackIcon />
          </IconButton>
          Go back
        </Typography>
      </Box>
      <Card
        sx={{
          minWidth: 345,
          maxWidth: 600,
          textAlign: "center",
          boxShadow: 3,
          bgcolor: "#fafafa",
        }}
      >
        <CardContent>
          <CheckCircleIcon sx={{ fontSize: 80, color: "#212121" }} />
          <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
            Successfully Present Credential
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            variant="outlined"
            onClick={navigateToHome}
            sx={{
              textTransform: "none",
              bgcolor: "#e0e0e0",
              borderColor: "#e0e0e0",
              color: "#212121",
            }}
          >
            Home
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
