import { useState } from 'react';

function LoginForm({ setData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (email.includes('@') && email.includes('.')) {
      if (
        email === 'dalilahonic' &&
        password === 'dalila123'
      ) {
        fetch('https://dummyjson.com/users/1')
          .then((res) => res.json())
          .then((data) => setData(data));
      } else alert('Email ili sifra pogresa');

    } else alert('Email nije validan');
  }
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='form'
      >
        <input
          type='text'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log In</button>
      </form>
    </>
  );
}

export default LoginForm;
