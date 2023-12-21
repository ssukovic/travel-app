import React from "react";
import Grid from '@mui/material/Grid';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Paper, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function MostAskedQuestions() {

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/travel-tip-form");
    };

    const questions = [
        {
            id: 1, user: { name: 'Sara S.', userPic: 'https://i.pravatar.cc/150?img=5' },
            text: "Does anyone know good Museums in London?",
            replies: [
                { id: 1, user: { name: "Anja S." }, text: "I visited The Design museum, I definitely recommend it to you, the tickets are usually 40-50 pounds, but if you buy it online on museum's web site you get 20% discount. :)" },
                { id: 1, user: { name: "Adriana M." }, text: "Madam Tussauds, Natural History Museum, Science museum are my top three, and as Teodora said buy tickets online, always, they are cheaper..." }
            ]
        },
        {
            id: 1, user: { name: 'Milan V.', userPic: 'https://i.pravatar.cc/150?img=2' },
            text: "Any good Thai restourant in Budapest?",
            replies: [
                { id: 1, user: { name: "Sale S." }, text: "Bangkok Tai restaurant, great food and it is not expensive, it is close to Danube so you can walk there after the restaurants..." }
            ]
        },
        {
            id: 1, user: { name: 'Teodora B', userPic: 'https://i.pravatar.cc/150?img=9' },
            text: "In Novi Sad for a weekend, anu suggestions for hiking trips?",
            replies: [
            ]
        }
    ]

  return (
    <Grid container>
      <Grid item xs={9}>
        <Typography
          sx={{ fontWeight: "light" }}
          mb="0.5em"
          align="left"
          variant="h3"
          component="h2"
        >
          Most asked question
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button fullWidth size="large" variant="outlined">
            Ask a question
          </Button>
        </CardActions>
      </Grid>
      <Grid item xs={12}>
        {questions.map((q) => {
          return (
            <>
              <Grid container spacing={2} pt="1em">
                <Grid item>
                  <Avatar alt={q.user.name} src={q.user.userPic} />
                </Grid>
                <Grid item xs>
                  <Grid container>
                    <Grid item xs={12}>
                      <h3
                        style={{
                          margin: 0,
                          textAlign: "left",
                          padding: "0",
                          marginBottom: "0.25em",
                        }}
                      >
                        {q.text}
                      </h3>
                    </Grid>
                    <Grid item xs={12}>
                      <p
                        style={{
                          textAlign: "left",
                          color: "gray",
                          margin: "0",
                        }}
                      >
                        {q.user.name} posted 1 minute ago
                      </p>
                    </Grid>
                    <Grid item>
                      <p
                        style={{
                          textAlign: "left",
                          borderLeft: "3px solid lightgray",
                          padding: "0 0.5em",
                        }}
                      >
                        {q.replies.map((r) => (
                          <>
                            <p style={{ marginBottom: "0" }}>{r.text}</p>
                            <span style={{ color: "gray" }}>{r.user.name}</span>
                          </>
                        ))}
                      </p>
                    </Grid>

                    <Grid xs={12} item>
                      <TextField
                        id="outlined-multiline-static"
                        label="Post a comment"
                        multiline
                        rows={3}
                        fullWidth
                        style={{ marginBottom: "0.5em" }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={{ marginBottom: "0.5em" }}
                      >
                        Post a comment
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" />
            </>
          );
        })}
      </Grid>
    </Grid>
  );
}
