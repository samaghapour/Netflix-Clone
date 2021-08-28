import '../styles/globals.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import ContextProvider from '../context';

const domainId = process.env.NEXT_PUBLIC_DOMAIN_ID;
const clientNumber = process.env.NEXT_PUBLIC_CLIENT_ID;

function MyApp({ Component, pageProps }) {
  const win = typeof window !== 'undefined';
  const queryClient = new QueryClient();

  return (
    <Auth0Provider
      domain={domainId}
      clientId={clientNumber}
      redirectUri={win && `${window.location.origin}/watchroom`}>
      <Head>
        <link rel='icon' type='image/png' href='/assets/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default MyApp;
