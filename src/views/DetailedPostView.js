import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { Likes } from "../components/Likes";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const DetailedPostView = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    { text: "Awesome tips, thanks!", user: "Dragan", avatar: "D" },
    {
      text: "How much money do I need for a weekend in Paris?",
      user: "Adriana",
      avatar: "A",
    },
  ]);
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleLeaveComment = () => {
    setComments([
      ...comments,
      { text: newComment, user: "Teodora", avatar: "T" },
    ]);
    setNewComment("");
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ minWidth: 275, marginRight: 5, width: 530, marginTop: 3 }}>
          <CardHeader
            title="A lovely weekend in Paris"
            style={{ textAlign: "center" }}
          />
          <Typography sx={{ fontSize: 14, textAlign: "center" }} gutterBottom>
            by Anja Solak
          </Typography>
          <ImageList sx={{ width: 530, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "left" }}
            >
              Last weekend, I embarked on a whirlwind adventure in the City of
              Love – Paris. The Eiffel Tower, adorned in golden hues, stood tall
              against the twilight sky, marking the beginning of our journey.
              From the Louvre’s artistry to the culinary delights of Montmartre,
              every moment was spent well. Paris, with its timeless charm and
              cultural richness, proved to be the perfect muse for a weekend
              getaway. Each cobblestone street, every bite of a flaky croissant,
              and the panoramic views from the Sacré-Cœur Basilica contributed
              to a great experience. Vive la Paris!
            </Typography>
            {/* Location Label */}
            <Typography
              variant="subtitle2"
              color="text.secondary"
              style={{ textAlign: "left" }}
            >
              Location: Paris
            </Typography>
            <Likes style={{ display: "flex", alignSelf: "end" }} number={23} />
            {/* Comment Section */}
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 10 }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                Replies
              </Typography>
              <Divider light style={{ marginLeft: 8, flex: 1 }} />
            </div>
            <div style={{ marginTop: 1 }}>
              <List>
                {comments.map((comment, index) => (
                  <ListItem key={index}>
                    <Avatar style={{ width: 29, height: 29, marginRight: 8 }}>
                      {comment.avatar}
                    </Avatar>
                    <ListItemText
                      primary={comment.text}
                      secondary={`by ${comment.user}`}
                    />
                  </ListItem>
                ))}
              </List>
              {/* New Comment Text Field */}
              <TextField
                label="Leave a comment"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newComment}
                onChange={handleCommentChange}
              />
              {/* Leave a Comment Button */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleLeaveComment}
              >
                Leave a Comment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const itemData = [
  {
    img: "https://thumbs.dreamstime.com/b/louvre-museum-paris-28960688.jpg",
    title: "Breakfast",
  },
  {
    img: "https://thumbs.dreamstime.com/b/paris-france-19597218.jpg",
    title: "Burger",
  },
  {
    img: "https://thumbs.dreamstime.com/b/arc-de-triomphe-arch-triumph-paris-france-12524477.jpg",
    title: "Camera",
  },
  {
    img: "https://thumbs.dreamstime.com/b/louvre-paris-20878633.jpg",
    title: "Coffee",
  },
  {
    img: "https://thumbs.dreamstime.com/b/paris-springtime-eiffel-tower-france-blossoming-tree-foreground-focus-blossom-tree-flowers-daylight-outdoor-40570512.jpg",
    title: "Hats",
  },
  {
    img: "https://thumbs.dreamstime.com/b/cafe-lunch-time-paris-france-latin-quarter-s-many-cafes-students-tourists-36800882.jpg",
    title: "Honey",
  },
  {
    img: "https://thumbs.dreamstime.com/b/cinderella-castle-disney-land-paris-most-visited-attraction-all-france-europe-35951002.jpg",
    title: "Basketball",
  },
  {
    img: "https://thumbs.dreamstime.com/b/louvre-paris-17631736.jpg",
    title: "Fern",
  },
  {
    img: "https://thumbs.dreamstime.com/b/view-typical-paris-cafe-le-consulat-montmartre-france-july-july-area-most-popular-destinations-32282590.jpg",
    title: "Mushrooms",
  },
  {
    img: "https://thumbs.dreamstime.com/b/paris-moulin-rouge-cabaret-night-39298380.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://thumbs.dreamstime.com/b/paris-1245511.jpg",
    title: "Sea star",
  },
  {
    img: "https://thumbs.dreamstime.com/b/paris-night-notre-dame-de-cathedral-68121349.jpg",
    title: "Bike",
  },
];
