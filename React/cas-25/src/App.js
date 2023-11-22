import { useContext } from 'react';
import './App.css';
import { MyContext } from './SimpleContext';
import MyComponent from './MyComponent';
import Tabs from './Tabs';
import TabsItem from './TabsItem';

function App() {
  const context = useContext(MyContext);
  console.log(context);

  return (
    <>
      <MyComponent />
      <Tabs>
        <TabsItem tabKey='0' />
        <TabsItem tabKey='1' />
        <TabsItem tabKey='2' />
      </Tabs>
    </>
  );
}

export default App;
