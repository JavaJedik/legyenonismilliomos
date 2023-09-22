import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Quiz from './components/Quiz';

const App = () => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('token'));

  return (
    <BrowserRouter>
      <div>
        <Routes>
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
            element={authenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/quiz"
            element={authenticated ? <Quiz /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
