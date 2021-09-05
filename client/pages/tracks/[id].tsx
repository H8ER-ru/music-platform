import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@material-ui/core";
import {useRouter} from "next/router";

const TrackPage = () => {
    const router = useRouter()

    return (
        <MainLayout>
            <Button
                style={{fontSize: 26}}
                onClick={() => router.push('/tracks')}>
                к списку
            </Button>
            <Grid container style={{margin: '20px '0}}>
                <img src={track.picture} alt="" width={200} height={200}/>
                <div>
                    <h2>Название трека {track.name}</h2>
                    <h2>Артист -{track.artist}</h2>
                    <h2>Исполнитель -{track.listens}</h2>
                </div>
            </Grid>
            <h3>Слова в треке</h3>
            <p>{track.text}</p>
            <h3>Комментарии</h3>
            <Grid container>
                <TextField
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    label="Комментарий"
                    multiline
                    fullWidth
                    rows={4}
                />
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>{comment.username}</div>
                        <div>{comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;