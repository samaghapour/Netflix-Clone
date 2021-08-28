function StoryCard1() {
  return (
    <div className='story-cards'>
      <div className='story-cards-container'>
        <div className='story-cards-text'>
          <h1 className='story-cards-title1'>Enjoy on Your TV.</h1>
          <h2 className='story-cards-title2'>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className='story-cards-image'>
          <img src='/assets/tv.gif' alt='' id='tvImage' />
          <div className='tv-video-container'>
            <video
              src='/assets/1.mp4'
              autoPlay
              muted
              loop
              playsInline
              id='tvVideo'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryCard1;
