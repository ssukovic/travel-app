import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./TravelTipForm.css";

export const SearchResults = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/travel-tip-form");
  };
  return (
    <Box className="formContainer">
      <Typography variant="h4">
        Currently there are no results for your search
      </Typography>
      <Button onClick={handleSearch} variant="contained">
        Ask a question
      </Button>
    </Box>
  );
};
