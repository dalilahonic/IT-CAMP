function Wrapper({ children, title, subtitle }) {
  return (
    <>
      <div className='wrapper'>
        <div>
          {(title || subtitle) && (
            <div>
              {title && <p className='title'>{title}</p>}
              {subtitle && (
                <p className='subtitle'>{subtitle}</p>
              )}
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Wrapper;
