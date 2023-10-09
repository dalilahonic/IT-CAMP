function ImageCard({ url, text }) {
  return (
    <div>
      {url && url.trim() !== '' && (
        <img
          style={{ width: '100px', height: '100px' }}
          src={url}
          alt=''
        />
      )}
      <h1 style={{ fontSize: '16px' }}>{text}</h1>
    </div>
  );
}

export default ImageCard;
