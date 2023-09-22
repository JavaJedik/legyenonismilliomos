import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateHome = () => {
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
          localStorage.setItem('accessToken', data.accessToken);
          navigate('/home');
        } else {
          alert('Sikertelen bejelentkezés. Rossz felhasználónév vagy jelszó.');
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <body>
      <div className="blur-container"></div>
      <div className="container">
        <div className="content">
          <input
            className="input-field"
            type="text"
            placeholder="Felhasználónév"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="content">
          <input
            className="input-field"
            type="password"
            placeholder="Jelszó"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="content">
          <button
              className= "button-style"
              onClick={navigateHome}>
            Bejelentkezés
          </button>
          <button
              className= "button-style"
              onClick={navigateRegister}>
            Regisztráció
          </button>
        </div>
        <div>
          <p className="content-bottom">Jelentkezz be, vagy regisztrálj a kezdéshez!</p>
        </div>
      </div>
    </body>
  );
};

export default Login;