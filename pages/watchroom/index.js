import { AuthError, ConnectionError, Footer, Loading } from '../../components';
import {
  WatchroomNavbar,
  WatchroomPreview,
  PopularData,
  RecentData,
  TrendData,
  PhoneSwitchers,
} from '../../components/watchroom';
import { AppContext } from '../../context';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import Head from 'next/head';

export default function watchroom() {
  const { isAuthenticated, isLoading } = useAuth0();
  const { WatchroomData } = useContext(AppContext);

  if (isLoading) return <Loading title='Loading your Watchroom...' />;

  if (!isAuthenticated) return <AuthError />;

  if (typeof WatchroomData[0] !== 'object') {
    return <ConnectionError />;
  }

  return (
    <div id='watchroomPage'>
      <Head>
        <title>Watchroom</title>
      </Head>

      <WatchroomNavbar />
      <WatchroomPreview />
      <div className='watchBoxContainer'>
        <PopularData />
        <RecentData />
        <TrendData />
      </div>
      <Footer />
      <PhoneSwitchers />
    </div>
  );
}
