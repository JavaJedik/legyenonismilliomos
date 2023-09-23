const express = require('express');
const router = express.Router();
const cors = require('cors');
const questionAuthenticate = require('../question-authenticate');

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

router.post('/ask-token', (req, res) => {
  const { userToken } = req.body;

  try {
    const game_id = 1; // Example: generate a new game_id
    const difficulty = 1; // Example: generate a new difficulty

    const questionToken = questionAuthenticate.generateQuestionToken(game_id, difficulty);
    return res.json({ success: true, message: 'User token is valid', questionToken });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid user token' });
  }
});

module.exports = router;