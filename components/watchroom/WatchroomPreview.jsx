import { useContext } from 'react';
import { AppContext } from '../../context';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

const imageUrl = 'https://image.tmdb.org/t/p/original/';

const WatchroomPreview = () => {
  const { WatchroomData } = useContext(AppContext);
  const PreviewData = WatchroomData[0]?.data?.results[0];

  return (
    <div
      id='WatchroomPreview'
      style={{
        background: `url(${
          imageUrl + PreviewData?.backdrop_path
        }) center center / cover no-repeat`,
      }}>
      <div id='previewContent'>
        <h1 id='previewName'>{PreviewData?.title || PreviewData?.name}</h1>
        <h2 id='previewh2'>Watch Now</h2>
        <p id='previewOverview'>{PreviewData?.overview}</p>
        <div id='previewBtnBox'>
          <a
            id='previewPlay'
            target='_blank'
            href={imageUrl + PreviewData?.poster_path}>
            <PlayArrowIcon />
            PLAY
          </a>
          <button
            id='previewAdd'
            data-id={PreviewData?.id}
            title="we dont have backend , so it's just dummy btn">
            <AddIcon />
            MY LIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchroomPreview;
