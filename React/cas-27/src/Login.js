import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function isEmailValid(email) {
    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const loginAction = async (formEmail, formPassword) => {
    try {
      const response = await fetch(
        'https://dummyjson.com/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: formEmail,
            password: formPassword,
            // expiresInMins: 60, // optional
          }),
        }
      );

      const data = await response.json();

      localStorage.setItem('token', data.token);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    let valid = true;

    if (!isEmailValid(email)) {
      setEmailError('email is very very wrong');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      setPasswordError('Password wrong');
      valid = false;
    } else {
      setPasswordError('');
    }

    loginAction(email, password);
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p>{emailError}</p>}

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && <p>{passwordError}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;
