import Image from 'next/image';

function StoryCard2() {
  return (
    <div className='story-cards'>
      <div className='story-cards-container'>
        <div className='story-cards-image'>
          <img src='/assets/mobile.gif' alt='' id='mobileImage' />

          <div id='mobile-content'>
            <div id='mobile-content-image'>
              <Image
                src='/assets/boxshot.png'
                width={100}
                height={95}
                alt='movie-poster'
              />
            </div>
            <div id='mobile' id='mobile-content-text'>
              <div id='mobile-content-text-col'>
                <div id='mobile-content-col-row1'>Stranger Things</div>
                <div id='mobile-content-col-row2'>downloading...</div>
              </div>
            </div>
          </div>
        </div>
        <div className='story-cards-text'>
          <h1 className='story-cards-title1'>
            Download your shows to watch offline.
          </h1>
          <h2 className='story-cards-title2'>
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default StoryCard2;
