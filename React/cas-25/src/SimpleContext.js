import { createContext, useState } from 'react';

export const MyContext = createContext({});

const SimpleContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState('state');
  return (
    <MyContext.Provider
      value={{ test: 'test', count, setCount, state }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default SimpleContextProvider;
