import { Box, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IdentityCard } from "../components/IdentityCard";
import { VcAction } from "../components/VcAction";
import Divider from "@mui/material/Divider";

export const Home = () => {
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          fontSize: 20,
          mb: 1,
        }}
      >
        Actions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 1,
          padding: 1,
        }}
      >
        <VcAction cardTitle="Present" />
        <VcAction cardTitle="Get" />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          fontSize: 20,
          mb: 2,
        }}
      >
        List of Credentials
      </Typography>
      <IdentityCard cardTitle="Student Card"></IdentityCard>
      <IdentityCard cardTitle="MyNumber Card"></IdentityCard>
    </>
  );
};
