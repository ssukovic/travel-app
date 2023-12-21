import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import "./TravelTipForm.css";

export const TravelTipForm = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/");
  };
  return (
    <Box className="formContainer">
      <Typography variant="h5">
        Currently there are no results for your search
      </Typography>
      <TextField
        id="outlined-search"
        label="Search location"
        type="search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField id="outlined-search" label="Tags" type="search" />

      <TextField
        id="outlined-multiline-static"
        label="Tell us what tip you need"
        multiline
        rows={4}
      />

      <Button onClick={handleSearch} variant="contained">
        Save
      </Button>
    </Box>
  );
};
