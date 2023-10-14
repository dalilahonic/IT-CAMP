import { useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  function handleClick() {
    setList((prev) => [...prev, 'novi tekst']);
  }

  function handleChange(value) {
    setValue(value);
  }
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Klikni me
      </button> */}
      <button onClick={() => handleClick()}>
        Dodaj Paragrapj
      </button>
      {list.map((list) => {
        return <p>{list}</p>;
      })}
      <input
        type='number'
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <p>
        {new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(value)}
      </p>
    </>
  );
}

export default App;
