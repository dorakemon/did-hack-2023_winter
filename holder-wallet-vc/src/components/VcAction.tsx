import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import { useNavigate } from "react-router-dom";

type VcActionProps = { cardTitle: string };

export const VcAction: React.FC<VcActionProps> = ({ cardTitle }) => {
  const isPresent = cardTitle === "Present";
  const icon = isPresent ? (
    <CloudUploadIcon /> // Adjust icon size as needed
  ) : (
    <AddToHomeScreenIcon /> // Adjust icon size as needed
  );
  const color = "primary";

  //  const page = isPresent ? "/presentcredential" : "/getcredential";

  const navigate = useNavigate();

  const navigateToQrCode = (actionType: any) => {
    navigate("/qrcode", { state: { actionType } });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 140, // Adjust the width of the card
        height: 150, // Adjust the height of the card as needed
        margin: 0,
        boxShadow: 3, // Optional: Adds shadow for depth
        bgcolor: "#f5f5f5",
      }}
    >
      <CardContent sx={{ textAlign: "center", padding: 2 }}>
        <Button
          variant="contained"
          color={color}
          sx={{
            borderRadius: "50%",
            minWidth: 50, // Minimum width of the button
            minHeight: 50, // Minimum height of the button
            marginBottom: 2,
          }}
          onClick={() => navigateToQrCode(cardTitle)}
        >
          {icon}
        </Button>
        <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
          {cardTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};
