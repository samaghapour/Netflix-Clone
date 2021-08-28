import { AppContext } from '../../context';
import { useContext, useState } from 'react';
import TrendItemContent from './TrendItemContent';

const imageUrl = 'https://image.tmdb.org/t/p/original/';

const TrendData = () => {
  const { WatchroomData } = useContext(AppContext);

  const TrendData =
    Array.isArray(WatchroomData) &&
    WatchroomData.length > 2 &&
    WatchroomData[2]?.data?.results;

  if (!TrendData) return <div>loading...</div>;

  const [Id, setId] = useState(TrendData[0]?.id);
  const [MediaType, setMediaType] = useState(TrendData[0]?.media_type);

  const handleItemContent = (e) => {
    const contentElem = document.getElementById('trendItemContent');
    setId(+e.target.dataset.id);
    setMediaType(e.target.dataset.type);

    if (contentElem.classList.contains('close') || +e.target.dataset.id === Id)
      contentElem.classList.toggle('close');
  };

  return (
    <div className='watchBox'>
      <h1 className='watchBox-title'>Trending now</h1>
      <div className='watchBox-items-container'>
        {TrendData?.map((item) => {
          return (
            <img
              loading='lazy'
              onClick={handleItemContent}
              src={imageUrl + item.poster_path}
              alt={item.name || item.title}
              className='watchBox-items'
              key={item.id}
              data-id={item.id}
              data-type={item.media_type}
            />
          );
        })}
      </div>
      <TrendItemContent id={Id} media={MediaType} />
    </div>
  );
};

export default TrendData;
