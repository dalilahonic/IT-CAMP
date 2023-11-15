import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(
      `https://api.quotable.io/search/quotes?query=${query}`
    )
      .then((res) => res.json())
      .then((resData) => setData(resData.results));
  }, [query]);

  function handleClick() {
    setQuery(inputValue);
    setInputValue('');
  }
  console.log(data);
  console.log(query);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}> KLIKNI </button>
      <div className='content'>
        {data.length <= 0 && <p>No quotes found</p>}
        {data?.map((el, index) => {
          return (
            <>
              <div key={index} className='card'>
                <p>{el.content}</p>
                <p>{el.author}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className='pagination'>
        <button>{'<'}</button>
        <button>1</button>
        <button>3</button>
        <button>10</button>
        <button>{'>'}</button>
      </div>
    </>
  );
}

export default App;
