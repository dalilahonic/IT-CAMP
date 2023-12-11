import './App.css';
import Find from './Find';
import List from './List';
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
      <Find />
      <List data={[{title: 'Prvi', }]} />
    </>
  );
}

export default App;
