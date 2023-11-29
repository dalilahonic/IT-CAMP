import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <button>Go to Log in</button> },
    { path: '/login', element: <Login /> },
    {
      path: '/loggedin',
      element: <p>You are logged in</p>,
    },
    { path: '/register', element: <Register /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
