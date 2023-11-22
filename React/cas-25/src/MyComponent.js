import { useContext } from 'react';
import { MyContext } from './SimpleContext';

function MyComponent() {
  const { test, count, setCount, state } =
    useContext(MyContext);

  //   console.log(context);
  //   console.log(test);
  console.log(state);
  return (
    <>
      <h1> {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        ++
      </button>
    </>
  );
}

export default MyComponent;
