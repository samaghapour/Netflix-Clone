import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export const AppContext = React.createContext();

async function getData() {
  return axios
    .all([
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`),
      axios.get(
        `
        https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_count.desc`
      ),
      axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
      ),
      axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`),
      axios.get(
        `
        https://api.themoviedb.org/3/tv/70523/recommendations?api_key=${apiKey}`
      ),
    ])
    .then((res) => {
      return res;
    })
    .catch((err) => err.message);
}

function ContextProvider({ children }) {
  const { data, status } = useQuery('data', getData);

  const [WatchroomData, setWatchroomData] = useState([data]);

  useEffect(() => {
    if (status === 'success') {
      setWatchroomData([data[0], data[1], data[2]]);
    }
  }, [status]);

  const SwitchToTv = () => {
    setWatchroomData([data[3], data[4], data[2]]);
  };

  const SwitchToMovie = () => {
    setWatchroomData([data[0], data[1], data[2]]);
  };
  return (
    <AppContext.Provider
      value={{
        WatchroomData,
        SwitchToTv,
        SwitchToMovie,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
