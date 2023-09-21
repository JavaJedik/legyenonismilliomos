import React from 'react';
import "./Quiz.css";

const Quiz = () => {
    return (
        <body>
        <div className = "blur-header"></div>
        <div className = "header">
            <h1>Legyen Ön is milliomos!</h1>
        </div>

        <div className = "blur-winnings-table"></div>
        <div className = "winnings-table">
            <table>
                <th>Nyeremény:</th>
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
            </table>
        </div>

        <div>
            <div className="blur-helps-background"></div>
            <div className="helps">
                <div className="help">
                    <p>help 1</p>
                    <div className="half" />
                </div>
                <div className="help">
                    <p>help 2</p>
                    <div className="phone" />
                </div>
                <div className="help">
                    <p>help 3</p>
                    <div className="audience" />
                </div>
            </div>
        </div>

        <div className = "blur-quiz-background"></div>
        <div className="quiz">
            <div className="question">
                <p>question</p>
            </div>
            <table className="answer-table">
                <tr>
                    <td className="answer">answer1</td>
                    <td className="answer">answer2</td>
                </tr>
                <tr>
                    <td className="answer">answer3</td>
                    <td className="answer">answer4</td>
                </tr>
            </table>
        </div>

        </body>
    );
}

export default Quiz;