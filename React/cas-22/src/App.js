import './App.css';
import { useState } from 'react';
import Search from './Search';

function App() {
  const [data, setData] = useState();

  const [url, setUrl] = useState(
    'https://api.quotable.io/random'
  );

  function handleGetData(minLen, maxLen) {
    fetch(url)
      .then((response) => response.json())
      .then((resData) => {
        setData(resData);
      });

    let newUrl = 'https://api.quotable.io/random';

    if (minLen !== '' && minLen > 0) {
      newUrl += '?minLength=' + minLen;
    }

    if (maxLen !== '' && maxLen > 0) {
      newUrl.includes('?')
        ? (newUrl += '&')
        : (newUrl += '?');

      newUrl += 'maxLength=' + maxLen;
    }

    setUrl(newUrl);
  }

  // async function getData() {
  //   try {
  //     // const response = await fetch(
  //     //   'https://api.quotable.io/random?minLength={}&&maxLength'
  //     // );

  //     const response = await fetch(
  //       'https://api.quotable.io/random'
  //     );
  //     console.log(response);
  //     const resData = await response.json();
  //     console.log(resData);

  //     setData(resData);
  //   } catch (err) {}
  // }

  // function handleGetData() {
  //   getData();
  // }

  console.log(url);

  return (
    <div>
      <Search onFetch={handleGetData} />
      <p>{data?.author}</p>
      <p>{data?.content}</p>
    </div>
  );
}

export default App;
