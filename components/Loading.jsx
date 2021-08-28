const Loading = ({ title }) => {
  return (
    <div className='loading-container'>
      <div className='loading-Spinner'> </div>
      <h1 className='loading-title'>{title}</h1>
    </div>
  );
};

export default Loading;
