import './App.css';
import Search from './Find';
import SimpleComponent from './SimpleComponent';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p onClick={() => setCount((prev) => prev++)}>
        {count}
      </p>
      <SimpleComponent />
      <Search />
    </>
  );
}

export default App;
