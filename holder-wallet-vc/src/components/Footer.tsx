import GetAppIcon from "@mui/icons-material/GetApp";
import StyleIcon from "@mui/icons-material/Style";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const value = React.useMemo(() => {
    if (location.pathname === "/get-qrcode") {
      return 0;
    } else if (location.pathname === "/home") {
      return 1;
    } else if (location.pathname === "/present-qrcode") {
      return 2;
    } else return -1;
  }, [location]);

  console.log(location);
  const navigate = useNavigate();

  const handleNavigationChange = (
    _event: any,
    newValue: React.SetStateAction<number>
  ) => {
    if (newValue === 0) {
      navigate("/get-qrcode");
    } else if (newValue === 1) {
      navigate("/home");
    } else if (newValue === 2) {
      navigate("/present-qrcode");
    }
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigationChange}
      >
        <BottomNavigationAction label="Get" icon={<GetAppIcon />} />
        <BottomNavigationAction label="Card" icon={<StyleIcon />} />
        <BottomNavigationAction label="Present" icon={<UploadFileIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
