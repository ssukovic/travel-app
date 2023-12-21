import React from "react";
import {
  Box,
  Button,
  Popper,
  Fade,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TagsAutocomplete } from "./TagsAutocomplete";
import "./SearchModal.css";

export default function SearchModal({ noResultsReceived }) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleSearch = () => {
    noResultsReceived(false);
  };

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        endIcon={<SearchIcon />}
        sx={{ color: "grey", borderColor: "grey" }}
      >
        What are you looking for?
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              className="modalContainer"
              sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
            >
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
              <Button onClick={handleSearch} variant="contained">
                Search
              </Button>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
