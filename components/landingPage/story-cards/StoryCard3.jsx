function StoryCard3() {
  return (
    <div className='story-cards'>
      <div className='story-cards-container'>
        <div className='story-cards-text'>
          <h1 className='story-cards-title1'>Watch everywhere.</h1>
          <h2 className='story-cards-title2'>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </div>
        <div className='story-cards-image'>
          <img src='/assets/device-pile.png' alt='' id='deviceImage' />
          <div id='device-video-container'>
            <video
              src='/assets/2.mp4'
              playsInline
              autoPlay
              muted
              loop
              id='deviceVideo'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryCard3;
