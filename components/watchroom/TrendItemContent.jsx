import axios from 'axios';
import { useQuery } from 'react-query';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import PlayArrow from '@material-ui/icons/PlayArrow';
import WatchBoxLoading from './WatchBoxLoading';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const imageUrl = 'https://image.tmdb.org/t/p/original/';
const YoutubeUrl = 'https://www.youtube.com/watch?v='; //+ youtube video key
const getMovieDetails = async (key) => {
  return axios
    .all([
      axios.get(
        `https://api.themoviedb.org/3/${key.queryKey[2]}/${key.queryKey[1]}/videos?api_key=${apiKey}`
      ),
      axios.get(
        `https://api.themoviedb.org/3/${key.queryKey[2]}/${key.queryKey[1]}?api_key=${apiKey}`
      ),
    ])
    .then((res) => {
      return res;
    })
    .catch((err) => err.message);
};

const TrendItemContent = ({ id, media }) => {
  const { data, status } = useQuery(['moviedata', id, media], getMovieDetails);

  const details = Array.isArray(data) && data.length > 1 && data[1].data;
  const video =
    Array.isArray(data) &&
    data.length > 1 &&
    YoutubeUrl + data[0].data.results[0].key;

  return (
    <div className='close watchBox-items-content' id='trendItemContent'>
      {(status === 'loading' || !details) && (
        <WatchBoxLoading title='Loading Your Content...' />
      )}

      {status === 'success' && (
        <div className='content-overview'>
          <div className='content-overview-text'>
            <h1 className='content-overview-name'>
              {details.title || details.name}
            </h1>

            <ul className='overview-content-genres'>
              {details?.genres?.map((genre) => {
                return (
                  <li key={genre.id} className='overview-content-genres-item'>
                    {genre.name}
                  </li>
                );
              })}
            </ul>

            <p className='overview-content-p'>
              {details.overview.substr(0, 400) + '...'}
            </p>

            <div className='overview-content-btns'>
              <button
                className='overview-content-addBtn'
                data-id={details.id}
                title="we dont have backend , so it's just dummy btn">
                <AddIcon className='content-addIcon' />
                MY LIST
              </button>
              <ThumbUpAltIcon />
              <ThumbDownAltIcon />
            </div>
          </div>
          <div
            className='content-overview-video'
            style={{
              background: `url(${
                imageUrl + details.backdrop_path
              })center center / cover  no-repeat`,
            }}>
            <a
              href={video && video}
              target='_blank'
              className='content-overview-playBtn'>
              <PlayArrow style={{ fontSize: '3rem' }} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendItemContent;
