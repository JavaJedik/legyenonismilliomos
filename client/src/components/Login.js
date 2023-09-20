import React from 'react';
import {useNavigate} from "react-router-dom";
import './Login.css';

const Login = () => {
    const navigate = useNavigate()

    const navigateQuiz = () => {
        navigate("/quiz");
    }

    return (
        <body>
            <h1>Jelentkezz be a játékba a kezdéshez!</h1>

            <input type="text" placeholder="Felhasználónév" id="username"/>
            <input type="text" placeholder="Jelszó" id="password"/>

            <button onClick={navigateQuiz}>Kattints ide!</button>
        </body>
    );
}

export default Login;
