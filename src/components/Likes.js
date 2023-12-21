import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";
import "./Likes.css";

export const Likes = ({ number }) => {
  const [liked, setLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(number);

  const handleDislike = () => {
    setLiked(false);
    setNumberOfLikes(numberOfLikes - 1);
  };

  const handleLike = () => {
    setLiked(true);
    setNumberOfLikes(numberOfLikes + 1);
  };
  return (
    <div className="likes">
      {liked && (
        <FavoriteIcon
          onClick={(e) => {
            e.preventDefault();
            handleDislike();
          }}
        />
      )}
      {!liked && (
        <FavoriteBorderIcon
          onClick={(e) => {
            e.preventDefault();
            handleLike();
          }}
        />
      )}
      <Typography>{numberOfLikes}</Typography>
    </div>
  );
};
