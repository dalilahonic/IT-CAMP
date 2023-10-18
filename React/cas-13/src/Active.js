function Active({ isActive, onClick }) {
  return (
    <p
      onClick={onClick}
      className={isActive ? 'active' : 'drugi'}
    >
      nesto
    </p>
  );
}

export default Active;
