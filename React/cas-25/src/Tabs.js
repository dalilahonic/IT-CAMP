import { createContext, useState } from 'react';

export const TabsContext = createContext({});

function Tabs(props) {
  const [active, setActive] = useState(0);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div style={{ margin: '10px' }}>{props.children}</div>
    </TabsContext.Provider>
  );
}

export default Tabs;
