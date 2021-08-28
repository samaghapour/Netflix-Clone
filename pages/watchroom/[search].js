import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/dist/client/router';
import {
  SearchResultNavbar,
  SearchTvResult,
  SearchMovieResult,
} from '../../components/searchResult';
import { AuthError, ConnectionError, Footer, Loading } from '../../components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const SearchResult = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(false);

  const tvData =
    Data &&
    Data.data.results.filter((item) => {
      return item.media_type === 'tv';
    });
  const movieData =
    Data &&
    Data.data.results.filter((item) => {
      return item.media_type === 'movie';
    });

  useEffect(() => {
    const popularContentElem = document.getElementById('popularItemContent');
    const recentContentElem = document.getElementById('recentItemContent');

    if (popularContentElem && recentContentElem) {
      popularContentElem.classList.add('close');
      recentContentElem.classList.add('close');
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${router.query.search}`
      )
      .then((res) => {
        setData(res);
      })
      .catch(() => setError(true));
  }, [router.query.search]);

  if (isLoading || !Data) {
    return <Loading title='Searching...' />;
  }
  if (!isAuthenticated) {
    return <AuthError />;
  }
  if (Error) {
    return <ConnectionError />;
  }
  if (isAuthenticated && Data) {
    return (
      <div id='searchResult'>
        <SearchResultNavbar />
        <div className='watchBoxContainer'>
          <SearchMovieResult data={movieData} />
          <SearchTvResult data={tvData} />
        </div>
        <Footer />
      </div>
    );
  }
};

export default SearchResult;
