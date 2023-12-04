import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserContextProvider from './UserContextProvider';
import Home from './Home';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <button>Go to Log in</button> },
    { path: '/login', element: <Login /> },
    {
      path: '/loggedin',
      element: <p>You are logged in</p>,
    },
    { path: '/register', element: <Register /> },
    { path: '/home', element: <Home /> },
  ]);
  return (
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  );
}

export default App;
