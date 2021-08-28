const ConnectionError = () => {
  return (
    <div className='error-container'>
      Connection Failed
      <button
        className='connection-error-btn'
        onClick={() => window.location.reload()}>
        retry
      </button>
    </div>
  );
};

export default ConnectionError;
