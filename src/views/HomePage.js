import React from "react";
import { Box, Typography } from "@mui/material";
import SearchModal from "../components/SearchModal";
import "./HomePage.css";
import { PostList } from "./PostList";
import MostAskedQuestions from "../components/MostAskedQuestions";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export const HomePage = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar style={{justifyContent:"space-between"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          ><Link to="/" style={{textDecoration: "none", color: "inherit"}}>
            <HomeIcon />
            </Link>
          </IconButton>
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Box className="homepage">
      <Typography variant="h4">Travel experiences</Typography>
      <Box>
        <SearchModal />
      </Box>
      <Box>
        <Typography variant="h4">Most popular posts</Typography>
        <PostList/>
      </Box>
      <Box>
        <MostAskedQuestions/>
      </Box>
    </Box>
    </div>
  );
};
