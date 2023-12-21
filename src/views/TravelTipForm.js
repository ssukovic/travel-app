import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, styled, TextareaAutosize, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import "./TravelTipForm.css";
import { TagsAutocomplete } from "../components/TagsAutocomplete";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const TextArea = styled(TextareaAutosize)(
  ({ theme }) => `
      width: 320px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 12px;
      border-radius: 12px 12px 0 12px;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      box-shadow: 0px 2px 2px ${
        theme.palette.mode === "dark" ? grey[900] : grey[50]
      };
  
      &:hover {
        border-color: ${blue[400]};
      }
  
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
      }
  
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `
);

export const TravelTipForm = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2 }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <HomeIcon />
              </Link>
            </IconButton>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className="formContainer">
        <Typography variant="h5">Tell us what tip do you need</Typography>
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
        <TagsAutocomplete />

        <TextArea
          className="textArea"
          placeholder="Tell us what tip do you need"
        ></TextArea>

        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{ marginTop: "15rem" }}
        >
          Save
        </Button>
      </Box>
    </div>
  );
};
