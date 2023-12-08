import { createContext, useState } from 'react';
const UserContext = createContext({});

function UserContextProvider(props) {
  const [user, setUser] = useState('');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>{props.children}</div>
    </UserContext.Provider>
  );
}

export default UserContextProvider;
