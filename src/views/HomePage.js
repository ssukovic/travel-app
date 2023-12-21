import React from "react";
import { Box, Typography } from "@mui/material";
import SearchModal from "../components/SearchModal";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <Box className="homepage">
      <Typography variant="h4">Travel experiences</Typography>
      <Box>
        <SearchModal />
      </Box>
      <Box>
        <Typography variant="h4">Most popular posts</Typography>
      </Box>
      <Box>
        <Typography variant="h4">Most asked questions</Typography>
      </Box>
    </Box>
  );
};
