import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CardMedia } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const PostList = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link to="/detailed-post-view">
        <Card sx={{ minWidth: 275, marginRight: 5 }}>
          <CardHeader title="Gabon" />
          <CardMedia
            component="img"
            height="140"
            image="https://upload.wikimedia.org/wikipedia/commons/a/a1/Plaine_aux_images_Nyoni%C3%A9_GABON.jpg"
            alt="Post Images"
          />
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            by Teodora
          </Typography>
          <CardContent>
            {/* Location Label */}
            <Typography
              variant="subtitle2"
              color="text.secondary"
              style={{ textAlign: "left" }}
            >
              Location: Gabon
            </Typography>
          </CardContent>
        </Card>{" "}
      </Link>
      <Card sx={{ minWidth: 275, marginRight: 5 }}>
        <CardHeader title="Gabon" />
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/a/a1/Plaine_aux_images_Nyoni%C3%A9_GABON.jpg"
          alt="Post Images"
        />
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          by Teodora
        </Typography>
        <CardContent>
          {/* Location Label */}
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{ textAlign: "left" }}
          >
            Location: Gabon
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, marginRight: 5 }}>
        <CardHeader title="Gabon" />
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/a/a1/Plaine_aux_images_Nyoni%C3%A9_GABON.jpg"
          alt="Post Images"
        />
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          by Teodora
        </Typography>
        <CardContent>
          {/* Location Label */}
          <Typography
            variant="subtitle2"
            color="text.secondary"
            style={{ textAlign: "left" }}
          >
            Location: Gabon
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="outlined"
        style={{ maxHeight: 40, justifyContent: "center" }}
        onClick={() => navigate("creator-form")}
      >
        Create a new post
      </Button>
    </div>
  );
};
