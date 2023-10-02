function Random() {
  const randomNumber = Math.random();

  if (randomNumber > 0.5)
    return <div className='red'></div>;

  return <div className='blue'></div>;
}

export default Random;
