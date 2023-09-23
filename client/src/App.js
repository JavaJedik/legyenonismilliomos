import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Register from "./components/Register";
import Leaderboard from "./components/Leaderboard";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Ellenőrizzük, van-e érvényes token
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:2000/check-logged-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setAuthenticated(true);
          } else {
            setAuthenticated(false);
            localStorage.removeItem('token'); // Töröljük az érvénytelen tokent
          }
        })
        .catch((error) => console.error('Fetch error:', error));
    } else {
      setAuthenticated(false);
    }
  }, []); // [] - csak egyszer fut le a komponens mount-kor

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              authenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={
              !authenticated ? (
                <Login setAuthenticated={setAuthenticated} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/home"
            element={
              authenticated ? <Home /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/quiz"
            element={
              authenticated ? <Quiz /> : <Navigate to="/login" />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;