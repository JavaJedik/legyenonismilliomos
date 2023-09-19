import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <body>
            <h1>Jelentkezz be a játékba a kezdéshez!</h1>

            <input type="text" placeholder="Felhasználónév" id="username"/>
            <input type="text" placeholder="Jelszó" id="password"/>

            <button>Kattints ide!</button>
        </body>
    );
}

export default Login;
