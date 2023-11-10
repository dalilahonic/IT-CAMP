import './App.css';
// import { useState, useEffect } from 'react';
import Countdown from './Countdown';

function App() {
  // const [text, setText] = useState(
  //   new Date().toLocaleTimeString()
  // );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setText(new Date().toLocaleTimeString());
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      <Countdown />
      {/* <h1>{text}</h1> */}
    </>
  );
}

export default App;
