import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./CreatorForm.css";
import { useNavigate } from "react-router-dom";
import { TagsAutocomplete } from "../components/TagsAutocomplete";

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
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
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

export const CreatorForm = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate = useNavigate();

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <Box className="creatorForm">
      <Typography variant="h4">Tell us about your experience!</Typography>
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
        sx={{ marginTop: "2rem" }}
        className="locationInput"
      />

      <TagsAutocomplete />

      <TextArea
        className="textArea"
        placeholder="Describe your experience"
      ></TextArea>

      <Button variant="outlined" onClick={() => handleClick()}>
        Upload images
      </Button>

      <input
        type="file"
        multiple
        name="myImage"
        style={{ display: "none" }}
        ref={hiddenFileInput}
        onChange={(event) => {
          setSelectedImages((selectedImages) => [
            ...selectedImages,
            ...event.target.files,
          ]);
        }}
      />

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {selectedImages.map((item) => (
          <ImageListItem key={item.name}>
            <img alt="not found" src={URL.createObjectURL(item)} />
          </ImageListItem>
        ))}
      </ImageList>

      <Box className="footer">
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          className="saveButton"
        >
          Save
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          className="cancelButton"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};
