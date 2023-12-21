import React from "react";
import { Autocomplete, TextField } from "@mui/material";

export const TagsAutocomplete = () => {
  const tagList = [
    "Restaurant",
    "Museum",
    "Hike",
    "Walk",
    "Hotel",
    "Travel",
    "Nature",
    "Photography",
    "Love",
    "Summer",
    "Explore",
    "Trip",
    "Vacation",
    "Fashion",
    "Beach",
    "Sunset",
    "Holiday",
    "Mountains",
    "Sea",
    "Tourism",
    "Architecture",
    "Sky",
    "Winter",
    "Spring",
    "Autumn",
  ];

  return (
    <Autocomplete
      sx={{ marginTop: "1rem" }}
      className="autocomplete"
      multiple
      id="tags-standard"
      options={tagList}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Search relevant tags"
          placeholder="Tag"
        />
      )}
    />
  );
};
