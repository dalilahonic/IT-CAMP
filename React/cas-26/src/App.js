import { useEffect, useState } from 'react';
import './App.css';
import LoginForm from './LoginForm';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users/1')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data ? (
        <div className='main'>
          <div className='card'>
            <div className='image'>
              <img src={data?.image} alt='' />
            </div>
            <div className='info'>
              <h1>My Profile</h1>
              <h4>{data?.firstName}</h4>
              <h4>{data?.lastName}</h4>
              <h4>{data?.age} years old</h4>
              <button onClick={() => setData(undefined)}>
                {' '}
                Save{' '}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoginForm setData={setData} />
      )}
    </>
  );
}

export default App;
