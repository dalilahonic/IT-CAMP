function Counter({ count, setCount }) {
  let style;
  count % 2 === 0
    ? (style = { color: 'red' })
    : (style = { color: 'blue' });
  return (
    <div>
      <p style={style}>{count}</p>
      <button onClick={() => setCount((prev) => prev + 2)}>
        Klikni
      </button>
    </div>
  );
}

export default Counter;
