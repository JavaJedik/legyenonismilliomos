import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import './Login.css';

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate("/login");
    };

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <body>
            <div className = "reg-blur-container"></div>
            <div className = "reg-container">
                <div className = "content">
                    <input
                        className= "input-field"
                        type="text"
                        placeholder="Felhasználónév"
                        id="username"
                    />
                </div>
                <div className = "content">
                    <input
                        className= "input-field"
                        type="text"
                        placeholder="E-mail cím"
                        id="email"
                    />
                </div>
                <div className = "content">
                    <input
                        className= "input-field"
                        type="password"
                        placeholder="Jelszó"
                        id="password"
                    />
                </div>
                <div className = "content">
                    <input
                        className= "input-field"
                        type="password"
                        placeholder="Jelszó mégegyszer"
                        id="password-check"
                    />
                </div>
                <div className="dropdown">
                    <button
                        className="dropbtn">
                        Adja meg a nemét!
                    </button>
                    <div id="myDropdown" className="dropdown-content">
                        <p>Férfi</p>
                        <p>Nő</p>
                        <p>Most nem válaszolnék</p>
                    </div>
                </div>
                <div className = "content">
                    <button
                        className= "button-style"
                        onClick={navigateLogin}>
                        Vissza
                    </button>
                    <button
                        className= "button-style">
                        Regisztráció
                    </button>
                </div>
            </div>
        </body>
    );
};

export default Register;