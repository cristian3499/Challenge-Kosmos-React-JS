const ImageComponent = ({ id, url, width, height, x, y, fit = 'contain', onClick }) => {
    return (
      <div style={{ position: 'relative', width: `${width}px`, height: `${height}px`, overflow: 'hidden' }}>
        <img
          id={id}
          src={url}
          alt=""
          onClick={onClick}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            transform: `translate(${x}px, ${y}px)`,
            objectFit: fit,
          }}
        />
      </div>
    );
  };

  export default ImageComponent