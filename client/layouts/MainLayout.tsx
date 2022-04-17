import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from '@material-ui/core';
import Player from '../components/Player';
import Head from 'next/head';

interface MainLayoutProps {
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Моя музычка'}</title>
        <meta name={'description'} content="Сайт с музыкой для всех" />
        <meta name={'robots'} content={'index, follow'} />
      </Head>
      <Navbar />
      <Container style={{ margin: '90px auto' }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
