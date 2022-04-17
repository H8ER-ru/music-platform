import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState(serverTrack);

  const router = useRouter();

  return (
    <MainLayout title={`Моя музычка - ${track.name}`}>
      <Button style={{ fontSize: 26 }} onClick={() => router.push('/tracks')}>
        к списку
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={'http://localhost:5000/' + track.picture} alt="" width={200} height={200} />
        <div>
          <h2>Название трека {track.name}</h2>
          <h2>Артист -{track.artist}</h2>
          <h2>Исполнитель -{track.listens}</h2>
        </div>
      </Grid>
      <h3>Слова в треке</h3>
      <p>{track.text}</p>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const reponse = await axios.get('http://localhost:5000/tracks/' + params.id);

  return {
    props: {
      serverTrack: reponse.data
    }
  };
};
