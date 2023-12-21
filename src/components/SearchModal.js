import React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./SearchModal.css";
import { TagsAutocomplete } from "./TagsAutocomplete";

export default function SearchModal() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleSearch = () => {
    navigate("/no-search-results");
  };

  return (
    <div>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
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
