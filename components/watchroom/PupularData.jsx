import { AppContext } from '../../context';
import { useContext, useState } from 'react';
import PopularItemContent from './PopularItemContent';

const imageUrl = 'https://image.tmdb.org/t/p/original/';

const PopularData = () => {
  const { WatchroomData } = useContext(AppContext);

  const PopularData =
    Array.isArray(WatchroomData) &&
    WatchroomData.length > 0 &&
    WatchroomData[0]?.data?.results;

  if (!PopularData) return <div>loading...</div>;

  const [Id, setId] = useState(PopularData[0]?.id);
  const [IsMovie, setIsMovie] = useState(Boolean(PopularData[0]?.title));

  const handleItemContent = (e) => {
    const contentElem = document.getElementById('popularItemContent');
    setId(+e.target.dataset.id);
    setIsMovie(e.target.dataset.ismovie);

    if (contentElem.classList.contains('close') || +e.target.dataset.id === Id)
      contentElem.classList.toggle('close');
  };

  return (
    <div className='watchBox'>
      <h1 className='watchBox-title'>Popular on Netflix</h1>
      <div className='watchBox-items-container'>
        {PopularData?.map((item) => {
          return (
            <img
              onClick={handleItemContent}
              loading='lazy'
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
      <PopularItemContent id={Id} isMovie={String(IsMovie)} />
    </div>
  );
};

export default PopularData;
