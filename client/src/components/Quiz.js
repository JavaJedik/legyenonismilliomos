import "./Quiz.css";
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../AuthService';

const Quiz = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
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
                <div className="title">Legyen Ön is milliomos!</div>
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
                    <div className="question-text">question</div>
                </div>
                <table className="answer-table">
                    <tbody>
                        <tr>
                            <td className="answer">answer1</td>
                            <td className="answer">answer2</td>
                        </tr>
                        <tr>
                            <td className="answer">answer3</td>
                            <td className="answer">answer4</td>
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