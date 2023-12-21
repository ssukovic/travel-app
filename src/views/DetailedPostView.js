import React, { useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
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
  const [comments, setComments] = useState(["Dragan: WOW", "Sara: nice tips!!"]);
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleLeaveComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };
  return (
    <Card sx={{ minWidth: 275, maxWidth:140 }}>
      <CardHeader title="Gabon"/>
      <CardMedia
      component="img"
      height="140"
      image="https://upload.wikimedia.org/wikipedia/commons/a/a1/Plaine_aux_images_Nyoni%C3%A9_GABON.jpg"
      alt="Post Images"/>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
          Posted by Teodora
        </Typography>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          Description: Gabon was awesome, visit it asap!
        </Typography>
        {/* Location Label */}
        <Typography variant="subtitle2" color="text.secondary">
          Location: Gabon <br/> <br/>
        </Typography>
        {/* Comment Section */}
        <Divider light />
        <div>
          {comments.map((comment, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {comment}
            </Typography>
          ))}
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
);
};
