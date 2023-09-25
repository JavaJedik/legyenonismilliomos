import "./Quiz.css";
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import useSound from "use-sound"; // npm install use-sound
import { useNavigate } from 'react-router-dom';
const AuthService = require('../AuthService');
//import play from "./sounds/playing.mp3"
//import correct from "./sounds/correct.mp3"
//import wrong from "./sounds/wrong.mp3"

const Quiz = () => {
    console.log("Loading Quiz");
    const userToken = localStorage.getItem('userToken');
    const navigate = useNavigate();

    const [question, setQuestion] = useState('Mi a fővárosa Magyarországnak?');
    const [answers, setAnswers] = useState(['Budapest', 'Prága', 'Bécs', 'Warsaw']);
    const [username, setUsername] = useState('Felhasználónév');

    const shuffleAnswers = (answers) => {
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return answers;
    };

    const navigateLogin = () => {
        localStorage.removeItem('userToken');
        navigate("/login");
    };

    const fetchData = async () => {
        try {
            const response = await AuthService.askToken();

            if (!response.success) {
                navigateLogin();
            } else {
                console.log('Server response:', response);
                setUsername(response.username);
            }
        } catch (error) {
            console.error('Token request failed:', error);
            navigateLogin();
        }
    };

    const handleFetchDataClick = () => {
        fetchData();
    };

    const handleNextButtonClick = async () => {
        const questionToken = localStorage.getItem('questionToken');
        const url = "http://localhost:2000/quiz-question/ask-question";

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ questionToken })
            });

            const data = await response.json();
            console.log('Server response:', data);

            setQuestion(data.question);
            setAnswers(data.answers);

        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    
    const handleAnswerButtonClick = async (chosenAnswer) => {
    const questionToken = localStorage.getItem('questionToken');
    const question = 'Mi a fővárosa Magyarországnak?'; // A kérdés, ezt lehet dinamikusan is állítani
    const requestBody = {
      questionToken,
      question,
      chosen_answer: chosenAnswer
    };

    try {
      const response = await fetch('http://localhost:2000/answer-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      console.log('Answer response:', data);

    } catch (error) {
      console.error('Answer request failed:', error);
    }
  };

    return (
        <div className="main-container">
            <div className="blur-header"></div>
            <div className="header">
                <div className="title">
                    <p>Legyen Ön is milliomos, </p><p>{username}!</p>
                </div>
            </div>

            <div className="blur-winnings-table"></div>
            <div className="winnings-table">
                <table>
                    <thead>
                        <tr>
                            <th>Nyeremény:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="fix-prize">
                            <td className="fix-prize">40.000.000 ft</td>
                        </tr>
                        <tr>
                            <td>20.000.000 ft</td>
                        </tr>
                        <tr>
                            <td>10.000.000 ft</td>
                        </tr>
                        <tr>
                            <td>5.000.000 ft</td>
                        </tr>
                        <tr>
                            <td>3.000.000 ft</td>
                        </tr>
                        <tr className="fix-prize">
                            <td className="fix-prize">1.500.000 ft</td>
                        </tr>
                        <tr>
                            <td>800.000 ft</td>
                        </tr>
                        <tr>
                            <td>500.000 ft</td>
                        </tr>
                        <tr>
                            <td>300.000 ft</td>
                        </tr>
                        <tr>
                            <td>200.000 ft</td>
                        </tr>
                        <tr className="fix-prize">
                            <td className="fix-prize">100.000 ft</td>
                        </tr>
                        <tr>
                            <td>50.000 ft</td>
                        </tr>
                        <tr>
                            <td>25.000 ft</td>
                        </tr>
                        <tr>
                            <td>10.000 ft</td>
                        </tr>
                        <tr>
                            <td className="bottom-cell">5.000 ft</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <div className="blur-helps-background"></div>
                <div className="helps">
                    <div className="help">
                        <p>Felezés</p>
                        <div className="half" />
                    </div>
                    <div className="help">
                        <p>Telefonálás</p>
                        <div className="phone" />
                    </div>
                    <div className="help">
                        <p>Közönség</p>
                        <div className="audience" />
                    </div>
                </div>
            </div>

            <div className="blur-quiz-background"></div>
            <div className="quiz">
                <div className="question">
                    <div className="question-text">{question}</div>
                </div>
                <table className="answer-table">
                    <tbody>
                        <tr>
                            <td className="answer answer1">
                            <button onClick={() => handleAnswerButtonClick(answers[0])}>{answers[0]}</button>
                          </td>
                          <td className="answer answer2">
                            <button onClick={() => handleAnswerButtonClick(answers[1])}>{answers[1]}</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="answer answer3">
                            <button onClick={() => handleAnswerButtonClick(answers[2])}>{answers[2]}</button>
                          </td>
                          <td className="answer answer4">
                            <button onClick={() => handleAnswerButtonClick(answers[3])}>{answers[3]}</button>
                          </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button className="stop" onClick={handleFetchDataClick}>
                Álljunk meg, Vágó Úr
            </button>
            <button className="next" onClick={handleNextButtonClick}>
                Menjünk tovább, Vágó Úr
            </button>

        </div>
    );
};

export default Quiz;