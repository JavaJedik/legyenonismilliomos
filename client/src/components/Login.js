import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateQuiz = () => {
    fetch('http://localhost:2000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          navigate('/quiz');
        } else {
          alert('Sikertelen bejelentkezés. Rossz felhasználónév vagy jelszó.');
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  };

  return (
    <div>
      <h1>Jelentkezz be a játékba a kezdéshez!</h1>
      <input
        type="text"
        placeholder="Felhasználónév"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Jelszó"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={navigateQuiz}>Bejelentkezés</button>
    </div>
  );
};

export default Login;
