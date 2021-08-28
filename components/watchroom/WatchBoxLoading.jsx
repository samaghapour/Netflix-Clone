const WatchBoxLoading = ({ title }) => {
  return (
    <div className='watchBox-spinner-container'>
      <div className='watchBox-spinner'> </div>
      <h1 className='watchBox-spinner-title'>{title}</h1>
    </div>
  );
};

export default WatchBoxLoading;
