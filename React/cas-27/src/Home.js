import userContext from './UserContextProvider';
import { useContext } from 'react';

function Home() {
  const user = useContext(userContext);
  console.log(user);
  return <div>Home</div>;
}

export default Home;
