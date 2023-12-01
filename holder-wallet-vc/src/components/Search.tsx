import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import * as React from "react";

const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  borderRadius: "30px",
  backgroundColor: theme.palette.common.white,
  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
  display: "flex", // Use flexbox for positioning
  alignItems: "center", // Center items vertically
  width: "100%",
  //   maxWidth: "250px", // Set a maxWidth for larger screens
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  // Remove the absolute positioning and height
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    borderRadius: "30px",
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1),
    width: "100%",
    // Remove the breakpoints for width adjustments
  },
}));

export default function SearchAppBar({ onSearchChange }) {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Search>
    </Box>
  );
}
