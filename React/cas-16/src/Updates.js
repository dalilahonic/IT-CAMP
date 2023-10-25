import { useState } from 'react';
import Counter from './Counter';

function Batching() {
  const [test, setTest] = useState(0);

  return (
    <div>
      <p
        style={{
          color: test % 5 === 0 ? 'green' : 'black',
        }}
      >
        Tekst
      </p>
      <p>{test}</p>
      <button onClick={() => setTest((prev) => prev + 1)}>
        Klikni
      </button>
      <Counter count={test} setCount={setTest} />
    </div>
  );
}

export default Batching;
