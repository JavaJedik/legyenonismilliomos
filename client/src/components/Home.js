import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import './Login.css';
import './Home.css';

const Home = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateQuiz = () => {
    navigate("/quiz");
  };

  const navigateLeaderboard = () => {
    navigate("/leaderboard");
  }

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
  };

  const checkLoggedIn = async () => {
    try {
      const response = await fetch('http://localhost:2000/check-logged-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Token érvényes:', data.username);
      } else {
        console.log('Hibás vagy lejárt token:', data.message);
      }
    } catch (error) {
      console.error('Hiba a token ellenőrzésekor:', error);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="home-blur-container">
      <div className="home-container">
        <div>
          <h1 className="home-header">Üdvözöljük, Felhasználónév!</h1>
        </div>
        <div className="home-dropdown">
          <button className="home-dropbtn">
            {selectedItem || "Válasszon nyelvet"}
          </button>
          <div id="home-myDropdown">
            <div className="home-dropdown-content">
              <p onClick={() => handleDropdownItemClick("Magyar")}>Magyar</p>
              <p onClick={() => handleDropdownItemClick("English")}>English</p>
            </div>
          </div>
        </div>
        <div>
          <button className="home-button-style" onClick={navigateLeaderboard}>
            Toplista megtekintése
          </button>
        </div>
        <div>
          <button className="home-button-style" onClick={navigateQuiz}>
            <u>Játék indítása</u>
          </button>
        </div>
        <div className="home-content">
          <button className="home-button-style" onClick={navigateLogin}>
            Kijelentkezés
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
