import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
	alert('A gombra kattintottál!');
  };

  return (
	<div className="App">
	  <button onClick={handleClick}>Kattints ide!</button>
	</div>
  );
}

export default App;
