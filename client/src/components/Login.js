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
          navigate('/home'); // Navigálj a Home oldalra a sikeres bejelentkezés után
        } else {
          alert('Sikertelen bejelentkezés. Rossz felhasználónév vagy jelszó.');
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  };

  return (
    <body>
        <div className = "blur-container"></div>
            <div className = "container">
                <div className = "content">
                    <input
                        type="text"
                        placeholder="Felhasználónév"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                <div className = "content">
                    <input
                        type="password"
                        placeholder="Jelszó"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className = "content">
                    <button onClick={navigateHome}>Bejelentkezés</button>
                    <button>Regisztráció</button>
                </div>
                <div className = "content-bottom">
                    <p>Jelentkezz be, vagy regisztrálj a kezdéshez!</p>
                </div>
            </div>
        </div>
    </body>
  );
};

export default Login;
