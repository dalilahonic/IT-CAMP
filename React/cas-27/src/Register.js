import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [text, setText] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch(
        'https://dummyjson.com/users/add',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: 'Muhammad',
            lastName: 'Ovi',
            age: 250,
            /* other user data */
          }),
        }
      );
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();

  //   if (name.length < 3 || email.length < 3) {
  //     setError(
  //       'All fields must contain more than 3 characters'
  //     );
  //     return;
  //   }

  //   if (
  //     !email.includes('@') ||
  //     !email.includes('.') ||
  //     email.split('.')[1]?.length < 2
  //   ) {
  //     setError('Email is not valid');
  //     return;
  //   }

  //   if (password.length < 8) {
  //     setError('Password must have at least 8 characters');
  //     return;
  //   }

  //   if (password.toLowerCase() === password) {
  //     setError(
  //       'Password must have at least one capital letter'
  //     );
  //     return;
  //   }

  //   if (password !== secondPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   setSecondPassword('');
  //   setError('');

  //   setIsLoggedIn(true);
  //   setText('You are logged in');
  // };

  return (
    <>
      {!isLoggedIn ? (
        <form className='form' onSubmit={handleRegister}>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
          />

          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
          />

          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />

          <label>Confirm Password</label>
          <input
            value={secondPassword}
            onChange={(e) =>
              setSecondPassword(e.target.value)
            }
            type='password'
          />

          {error && (
            <p className='error-message'>{error}</p>
          )}

          <button type='submit'>Register</button>
        </form>
      ) : (
        <p>{text}</p>
      )}
    </>
  );
}

export default Register;
