import React from 'react';
import Head from 'next/head';
import LandingPage from '../components/landingPage';

function Home() {
  return (
    <>
      <Head>
        <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
        <meta
          name='description'
          content='Watch cool tv shows and movies AnyWhere!'
        />
        <meta
          name='keywords'
          content='netflix,online watch,tv show , movies , new movies , new tv shows , action,drama,stream'
        />
      </Head>
      <LandingPage />
    </>
  );
}

export default Home;
