import React from "react";
import Grid from '@mui/material/Grid';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Paper, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';


export const MostAskedQuestions = () => {
    const questions = [
        {
            id: 1, user: { name: 'Sara S.', userPic: 'https://i.pravatar.cc/150?img=5' },
            text: "Does anyone know good Museums in London?",
            replies: [
                { id: 1, user: { name: "Sale S." }, text: "The British Museum is a public museum dedicated to human history, art and culture located in the Bloomsbury area of London!" },
                { id: 1, user: { name: "Adriana M." }, text: "Have fun! London is awesome." },
                { id: 1, user: { name: "Dragan M." }, text: "Have fun!" }
            ]
        },
        {
            id: 1, user: { name: 'Anja S.', userPic: 'https://i.pravatar.cc/150?img=1' },
            text: "Any good Thai restourant in Budapest?",
            replies: [
            ]
        },
        {
            id: 1, user: { name: 'Teodora B', userPic: 'https://i.pravatar.cc/150?img=9' },
            text: "In Novi Sad for a weekend, anu suggestions for hiking trips?",
            replies: [
                { id: 1, user: { name: "Sale S." }, text: "Have fun!" }
            ]
        }

    ]

    return (
        <Grid container>
            <Grid item xs={9}>
                <Typography style={{ marginLeft: '72px' }} sx={{ fontWeight: 'light' }} align="left" variant="h3" component="h2">Most asked question</Typography>
            </Grid>
            <Grid item xs={3}>
                <CardActions sx={{ justifyContent: "center"}}>
                    <Button fullWidth size="large" variant="outlined">Ask a question</Button>
                </CardActions>


            </Grid>
            <Grid item xs={12}>
                {
                    questions.map(q => {
                        return (
                            <Paper style={{ padding: "1em" }}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Avatar alt={q.user.name} src={q.user.userPic} />
                                    </Grid>
                                    <Grid item xs>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <h3 style={{ margin: 0, textAlign: "left", padding: "0", marginBottom: "0.25em" }}>{q.text}</h3>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <p style={{ textAlign: "left", color: "gray", margin: "0" }}>
                                                    {q.user.name} posted 1 minute ago
                                                </p>
                                            </Grid>
                                            <Grid item>
                                                <p style={{ textAlign: "left", borderLeft: "3px solid lightgray", padding: "0 0.5em" }}>
                                                    {q.replies.map(r => (
                                                        <>
                                                            <p style={{ marginBottom: "0" }}>{r.text}</p>
                                                            <span style={{ color: "gray" }}>{r.user.name}</span>
                                                        </>))}
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
                                                <Button variant="outlined" fullWidth style={{ marginBottom: "0.5em" }}>Post a comment</Button>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider variant="fullWidth" />
                            </Paper>
                        )
                    })
                }

            </Grid>

        </Grid>
    );
};
