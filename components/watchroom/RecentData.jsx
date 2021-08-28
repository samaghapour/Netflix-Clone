import { AppContext } from '../../context';
import { useContext, useState } from 'react';
import RecentItemContent from './RecentItemContent';

const imageUrl = 'https://image.tmdb.org/t/p/original/';

const RecentData = () => {
  const { WatchroomData } = useContext(AppContext);

  const RecentData =
    Array.isArray(WatchroomData) &&
    WatchroomData.length > 1 &&
    WatchroomData[1]?.data?.results;

  if (!RecentData) return <div>loading...</div>;

  const [Id, setId] = useState(RecentData[0]?.id);
  const [IsMovie, setIsMovie] = useState(Boolean(RecentData[0]?.title));

  const handleItemContent = (e) => {
    const contentElem = document.getElementById('recentItemContent');
    setId(+e.target.dataset.id);
    setIsMovie(e.target.dataset.ismovie);

    if (contentElem.classList.contains('close') || +e.target.dataset.id === Id)
      contentElem.classList.toggle('close');
  };

  return (
    <div className='watchBox'>
      <h1 className='watchBox-title'>Recently Added</h1>
      <div className='watchBox-items-container'>
        {RecentData?.map((item) => {
          return (
            <img
              loading='lazy'
              onClick={handleItemContent}
              src={imageUrl + item.poster_path}
              alt={item.name || item.title}
              className='watchBox-items'
              key={item.id}
              data-id={item.id}
              data-ismovie={Boolean(item.title)}
            />
          );
        })}
      </div>
      <RecentItemContent id={Id} isMovie={String(IsMovie)} />
    </div>
  );
};

export default RecentData;
