import { useState } from 'react';
import PopularItemContent from '../watchroom/popularItemContent';
import ConnectionError from '../ConnectionError';

const imageUrl = 'https://image.tmdb.org/t/p/original/';

const SearchMovieResult = ({ data }) => {
  const [Id, setId] = useState(null);

  const handleItemContent = (e) => {
    const contentElem = document.getElementById('popularItemContent');
    setId(+e.target.dataset.id);

    if (
      contentElem &&
      (contentElem.classList.contains('close') || +e.target.dataset.id === Id)
    )
      contentElem.classList.toggle('close');
  };

  if (data === 'error') {
    return <ConnectionError />;
  }

  return (
    <div className='watchBox'>
      <h1 className='watchBox-title'>Results in Movie</h1>
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
      <PopularItemContent id={Id} isMovie={'true'} />
    </div>
  );
};

export default SearchMovieResult;
