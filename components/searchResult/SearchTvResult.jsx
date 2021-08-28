import { useState } from 'react';
import RecentItemContent from '../watchroom/RecentItemContent';
import ConnectionError from '../ConnectionError';

const imageUrl = 'https://image.tmdb.org/t/p/original/';

const SearchTvResult = ({ data }) => {
  const [Id, setId] = useState(null);

  const handleItemContent = (e) => {
    const contentElem = document.getElementById('recentItemContent');
    setId(+e.target.dataset.id);

    if (contentElem.classList.contains('close') || +e.target.dataset.id === Id)
      contentElem.classList.toggle('close');
  };

  if (data === 'error') {
    return <ConnectionError />;
  }

  return (
    <div className='watchBox'>
      <h1 className='watchBox-title'>Results in Tv</h1>
      <div className='watchBox-items-container'>
        {data.length > 1 ? (
          data?.map((item) => {
            return (
              <img
                loading='lazy'
                onClick={handleItemContent}
                src={imageUrl + item.poster_path}
                alt={item.title}
                className='watchBox-items'
                key={item.id}
                data-id={item.id}
              />
            );
          })
        ) : (
          <div>Nothing Found!</div>
        )}
      </div>
      <RecentItemContent id={Id} isMovie={'false'} />
    </div>
  );
};

export default SearchTvResult;
