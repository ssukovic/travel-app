import React, { useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
// import { makeStyles } from "@mui/styles";
import { CardMedia } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 300, // Adjust the width as needed
//   },
//   commentsSection: {
//     marginTop: theme.spacing(2), // Adjust spacing as needed
//   },
//   comment: {
//     marginBottom: theme.spacing(1), // Adjust spacing as needed
//   },
// }));

export const DetailedPostView = () => {
  // const classes = useStyles();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([{text: "WOW", user: "Dragan"}, {text:"nice tips!!", user: "Sara"}]);
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleLeaveComment = () => {
    setComments([...comments, {text: newComment, user: "Teodora"}]);
    setNewComment("");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <Card sx={{ minWidth: 275, marginRight: 5 }}>
      <CardHeader title="Gabon"/>
      {/* <CardMedia
      component="img"
      height="140"
      image="https://upload.wikimedia.org/wikipedia/commons/a/a1/Plaine_aux_images_Nyoni%C3%A9_GABON.jpg"
      alt="Post Images"/> */}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
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
      <Typography sx={{ fontSize: 14 }} gutterBottom>
          Posted by Teodora
        </Typography>
      <CardContent>
      <Typography variant="body2" color="text.secondary" style={{textAlign: "left"}}>
          Description: Gabon was awesome, visit it asap!
        </Typography>
        {/* Location Label */}
        <Typography variant="subtitle2" color="text.secondary" style={{textAlign: "left"}}>
          Location: Gabon
        </Typography>
        {/* Comment Section */}
        <div style={{display: "flex", alignItems: "center", marginTop: 10}}><Typography variant="subtitle2" color="text.secondary">Replies</Typography><Divider light style={{marginLeft:8, flex:1}}/></div>
        <div style={{marginTop: 1}}>
          {/* {comments.map((comment, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {comment}
            </Typography>
          ))} */}
          <List>
            {comments.map((comment, index) => (
              <ListItem key={index} >
                <Avatar style={{width:29, height: 29, marginRight:8}}>U</Avatar>
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
          <Button variant="contained" color="primary" onClick={handleLeaveComment}>
            Leave a Comment
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
