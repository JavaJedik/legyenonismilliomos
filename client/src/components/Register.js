import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import './Login.css';

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate("/login");
    };

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