import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import './Login.css';
import './Home.css';
import AuthService from '../AuthService';

const Home = async () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  
  try {
      const data = await AuthService.checkLoggedIn();

      if (!data.success) {
        navigateLogin();
      }
    } catch (error) {
      console.error('Hiba az autentikációs ellenőrzésben:', error);
    }

  const navigateLogin = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  const navigateQuiz = async () => {
    try {
      const data = await AuthService.checkLoggedIn();

      if (data.success) {
        navigate("/quiz");
      } else {
        navigateLogin();
      }
    } catch (error) {
      console.error('Hiba az autentikációs ellenőrzésben:', error);
    }
  };

  const navigateLeaderboard = async () => {
    try {
      const data = await AuthService.checkLoggedIn();

      if (data.success) {
        navigate("/leaderboard");
      } else {
        navigateLogin();
      }
    } catch (error) {
      console.error('Hiba az autentikációs ellenőrzésben:', error);
    }
  };

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="main-container">
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
    </div>
  );
};

export default Home;