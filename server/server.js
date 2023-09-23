const express = require('express');
const cors = require('cors');
const app = express();
const loginRoute = require('./routes/login');
const checkLoggedInRoute = require('./routes/check-logged-in');
const quizQRoute = require('./routes/quiz-question');

app.use(cors());
app.use(express.json());
app.use('/login', loginRoute);
app.use('/check-logged-in', checkLoggedInRoute);
app.use('/quiz-question', quizQRoute); 

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`A szerver fut a ${PORT}-es porton`);
});