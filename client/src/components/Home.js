import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Üdvözöllek a Quiz alkalmazásban!</h1>
      <p>Ez a kezdőoldal.</p>
    </div>
  );
};

export default Home;
