import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <input type="text" placeholder="Felhasználónév" id="username"/>
            <input type="text" placeholder="Jelszó" id="password"/>

            <button>Kattints ide!</button>
        </div>
    );
}

export default Login;
