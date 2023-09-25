const express = require('express');
const router = express.Router();
const cors = require('cors');
const questionAuthenticate = require('../question-authenticate');
const { verifyToken } = require('../user-authenticate');
const connection = require('../db');

router.use(cors());
router.use(express.json());

router.post('/', (req, res) => {
  const { questionToken } = req.body;

  try {
    const decodedQuestion = questionAuthenticate.verifyQuestionToken(questionToken);
    console.log('Question verified:', decodedQuestion);

    const game_id = decodedQuestion.game_id;
    const currentDifficulty = decodedQuestion.difficulty;

    const newDifficulty = currentDifficulty + 1;

    const newQuestionToken = questionAuthenticate.generateQuestionToken(game_id, newDifficulty);

    return res.json({
      success: true,
      message: 'Question token is valid',
      newQuestionToken // Modified variable name to match the response
    });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid question token' });
  }
});

router.post('/ask-token', async (req, res) => {
  const { userToken } = req.body;

  try {
    if (!userToken) {
      return res.status(401).json({ success: false, message: 'Token not provided' });
    }

    const decodedToken = verifyToken(userToken);
    const { username } = decodedToken;

    const insertGameQuery = `INSERT INTO game (player_id, date, is_in_progress) 
                             VALUES ((SELECT id FROM player WHERE name = ?), CURDATE(), 1)`;
    
    connection.query(insertGameQuery, [username], (insertError, insertResults) => {
      if (insertError) {
        console.error('Error inserting game:', insertError);
        return res.status(500).json({ success: false, message: 'Error inserting game' });
      }

      const game_id = insertResults.insertId; // Retrieve the auto-incremented game_id
      const difficulty = 1;

      const questionToken = questionAuthenticate.generateQuestionToken(game_id, difficulty);
      return res.json({ success: true, message: 'Token is valid', username, questionToken });
    });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid user token' });
  }
});

router.post('/ask-question', async (req, res) => {
  const { questionToken } = req.body;

  try {
    if (!questionToken) {
      return res.status(400).json({ success: false, message: 'Question token not provided' });
    }

    const decodedQuestion = questionAuthenticate.verifyQuestionToken(questionToken);
    console.log('Question verified:', decodedQuestion);

    const { game_id, difficulty } = decodedQuestion;

    const selectQuery = `
      SELECT question, good_answer, wrong_answer1, wrong_answer2, wrong_answer3
      FROM question
      WHERE difficulty = ? AND language_id = 1
      ORDER BY RAND()
      LIMIT 1
    `;

    connection.query(selectQuery, [difficulty], (queryError, results) => {
      if (queryError) {
        console.error('Error querying database:', queryError);
        return res.status(500).json({ success: false, message: 'Error querying database' });
      }

      if (results.length === 0) {
        return res.status(404).json({ success: false, message: 'No question found for the given difficulty' });
      }

      const { question, good_answer, wrong_answer1, wrong_answer2, wrong_answer3 } = results[0];

      const response = {
        success: true,
        message: 'Question retrieved',
        decodedGameId: game_id,
        decodedDifficulty: difficulty,
        question,
        answers: [good_answer, wrong_answer1, wrong_answer2, wrong_answer3].sort(() => Math.random() - 0.5)
      };

      return res.json(response);
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(401).json({ success: false, message: 'Invalid question token' });
  }
});

router.post('/answer-question', async (req, res) => {
  const { questionToken, question, chosen_answer } = req.body;

  try {
    if (!questionToken || !question || !chosen_answer) {
      return res.status(400).json({ success: false, message: 'Invalid request. Required fields are missing.' });
    }

    const decodedQuestion = questionAuthenticate.verifyQuestionToken(questionToken);
    console.log('Question verified:', decodedQuestion);

    const { game_id, difficulty } = decodedQuestion;

    const selectQuery = `
      SELECT good_answer, difficulty
      FROM question
      WHERE question = ? AND difficulty = ? AND language_id = 1
      LIMIT 1
    `;

    connection.query(selectQuery, [question, difficulty], (queryError, results) => {
      if (queryError) {
        console.error('Error querying database:', queryError);
        return res.status(500).json({ success: false, message: 'Error querying database' });
      }

      if (results.length === 0) {
        return res.status(404).json({ success: false, message: 'No question found for the given difficulty and question' });
      }

      const { good_answer, difficulty } = results[0];
      const isCorrectAnswer = good_answer === chosen_answer;
      
      const response = {
        success: true,
        message: 'Answer evaluated',
        isCorrectAnswer,
        difficulty,
        decodedGameId: game_id
      };

      return res.json(response);
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(401).json({ success: false, message: 'Invalid question token' });
  }
});

module.exports = router;