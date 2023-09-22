import React from 'react';

const Home = () => {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div>
      <h1>Üdvözöllek a Quiz alkalmazásban!</h1>
      <p>Ez a kezdőoldal.</p>
      <p>Token: {accessToken}</p>
    </div>
  );
};

export default Home;