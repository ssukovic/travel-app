import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import SearchModal from "../components/SearchModal";
import { PostList } from "./PostList";
import MostAskedQuestions from "../components/MostAskedQuestions";
import "./HomePage.css";

import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const [noResults, setNoResults] = useState(true);

  const handleNoResults = (state) => {
    setNoResults(state);
  };

  const handleSearch = () => {
    navigate("/travel-tip-form");
  };

  return (
    <>
      {noResults ? (
        <Box className="homepage">
          <Typography variant="h4">Travel experiences</Typography>
          <Box>
            <SearchModal noResultsReceived={handleNoResults} />
          </Box>
          <Box>
            <Typography variant="h4">Most popular posts</Typography>
            <PostList />
          </Box>
          <Box>
            <MostAskedQuestions />
          </Box>
        </Box>
      ) : (
        <Box className="formContainer">
          <Typography variant="h4">
            Currently there are no results for your search
          </Typography>
          <Button onClick={handleSearch} variant="outlined">
            Ask a question
          </Button>
        </Box>
      )}
    </>
  );
};
