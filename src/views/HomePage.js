import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import SearchModal from "../components/SearchModal";
import { PostList } from "./PostList";
import MostAskedQuestions from "../components/MostAskedQuestions";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
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
      <>
        {noResults ? (
          <Box className="homepage">
            <Typography variant="h4">Travel experiences</Typography>
            <Box>
              <SearchModal noResultsReceived={handleNoResults} />
            </Box>
            <Box>
              <PostList />
            </Box>
            <Box>
              <MostAskedQuestions />
            </Box>
          </Box>
        ) : (
          <Box className="formContainer">
            <Typography variant="h5">
              Currently there are no results for your search
            </Typography>
            <Button onClick={handleSearch} variant="outlined">
              Ask a question
            </Button>
          </Box>
        )}
      </>
    </div>
  );
};
