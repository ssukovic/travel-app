import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CardMedia } from "@mui/material";
import { Grid, CardActions, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Likes } from "../components/Likes";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const posts = [
  {
    id: 1,
    title: "A lovely weekend in Paris",
    cardImg:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Paris",
    likes: 23,
  },
  {
    id: 2,
    title: "What museums to see in Barcelona!",
    location: "Barcelona",
    cardImg:
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 18,
  },
  {
    id: 3,
    title: "Beaches you have to visit in Lastovo?",
    location: "Lastovo",
    cardImg:
      "https://images.unsplash.com/photo-1552568282-59ce97dffb87?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 21,
  },
  // {
  //   id: 4,
  //   title: "What to see in Berlin!",
  //   location: "Berlin",
  //   cardImg: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   likes: 4
  // }
];

export const PostList = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Typography variant="h5">Most popular posts</Typography>
      </Grid>
      <Grid item xs={3}>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button fullWidth variant="outlined">
            Create a post
          </Button>
        </CardActions>
      </Grid>
      {posts.map((p) => (
        <Grid item xs={4}>
          <Link style={{ textDecoration: "none" }} to="/detailed-post-view">
            <Card sx={{ minWidth: 275, height: "100%" }}>
              <CardMedia component="img" image={p.cardImg} alt="Post Images" />
              <CardHeader mb={0} title={p.title} />
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    style={{ textAlign: "left" }}
                  >
                    By: Teodora
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    style={{ textAlign: "left" }}
                  >
                    Location: {p.location}
                  </Typography>
                </div>

                <Likes number={p.likes} />
              </CardContent>
            </Card>{" "}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};