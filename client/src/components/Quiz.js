import React from 'react';
import "./Quiz.css";

const Quiz = () => {
    return (
        <body>
            <div>
                <h1>Legyen Ön is milliomos!</h1>
            </div>

            <div class="ne-vedd-ki-a-divet-mert-elrontja-a-poziciojat">
                <table>
                    <thead>Nyeremény:</thead>
                    <tr class="fix-prize">
                        <td>40.000.000 ft</td>
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
                    <tr class="fix-prize">
                        <td>1.500.000 ft</td>
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
                    <tr class="fix-prize">
                        <td>100.000 ft</td>
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
                        <td>5.000 ft</td>
                    </tr>
                </table>
            </div>

            <div class="ne-vedd-ki-a-divet-mert-elrontja-a-poziciojat">
                <div class="helps">
                    <div class="help">
                        <p>help 1</p>
                    </div>
                    <div class="help">
                        <p>help 2</p>
                    </div>
                    <div class="help">
                        <p>help 3</p>
                    </div>
                </div>
            </div>


            <div class="quiz">
                <div class="question">
                    <p>question</p>
                </div>
                <div class="answer">
                    <p>answer 1</p>
                </div>
                <div class="answer">
                    <p>answer 2</p>
                </div>
                <div class="answer">
                    <p>answer 3</p>
                </div>
                <div class="answer">
                    <p>answer 4</p>
                </div>
            </div>

        </body>
    );
}

export default Quiz;