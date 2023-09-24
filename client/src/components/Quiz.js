import "./Quiz.css";
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import useSound from "use-sound"; // npm install use-sound
import { useNavigate } from 'react-router-dom';
import AuthService from '../AuthService';
import play from "./sounds/playing.mp3"
import correct from "./sounds/correct.mp3"
import wrong from "./sounds/wrong.mp3"

const Quiz = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [letsPlay] = useSound(play); // A játék indításánál ezt kell meghívni.
    const [correctAnswer] = useSound(correct); // Helyes válasznál ezt kell meghívni.
    const [wrongAnswer] = useSound(wrong); // Rossz válasznál ezt kell meghívni.

    const userName = "Felhasználónév"
    
    const shuffleAnswers = (answers) => { // Nem ide akartam deklarálni, de lentebb nem lehet, kívülre meg nem akarom
      for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
      }
      return answers;
    };
    
    const question_difficulty = 1;
    const question = 'Mi a fővárosa Magyarországnak? Mi a fővárosa Magyarországnak?';
    const answers = shuffleAnswers(['Budapest', 'Prága', 'Bécs', 'Warsaw']);
    
    useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AuthService.checkLoggedIn();

        if (!data.success) {
          navigateLogin();
        }
      } catch (error) {
        console.error('Hiba az autentikációs ellenőrzésben:', error);
      }
    };

      fetchData();
    }, []);

    const navigateLogin = () => {
      localStorage.removeItem('token');
      navigate("/login");
    };
    
    return (
        <div className="main-container">
            <div className = "blur-header"></div>
            <div className = "header">
                <div className="title">
                    <p>Legyen Ön is milliomos, </p><p>{userName}!</p>
                </div>
            </div>

            <div className = "blur-winnings-table"></div>
            <div className = "winnings-table">
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
                            <td className = "bottom-cell">5.000 ft</td>
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

            <div className = "blur-quiz-background"></div>
            <div className="quiz">
                <div className="question">
                    <div className="question-text">{question}</div>
                </div>
                <table className="answer-table">
                    <tbody>
                        <tr>
                            <td className="answer answer1">{answers[0]}</td>
                            <td className="answer answer2">{answers[1]}</td>
                          </tr>
                          <tr>
                            <td className="answer answer3">{answers[2]}</td>
                            <td className="answer answer4">{answers[3]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button className="stop">Álljunk meg, Vágó Úr</button>
            <button className="next">Menjünk tovább, Vágó Úr</button>

        </div>
    );
}

export default Quiz;