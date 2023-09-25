const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateRandomKey = () => {
  const randomBytes = crypto.randomBytes(144);
  const asciiString = randomBytes.toString('ascii');
  return asciiString;
};

const GAME_ID_KEY = 'game_id';
const DIFFICULTY_KEY = 'difficulty';

const TOKEN_SECRET_GAME_ID = generateRandomKey();
const TOKEN_SECRET_DIFFICULTY = generateRandomKey();

const generateQuestionToken = (game_id, difficulty) => {
  const payload = {
    [GAME_ID_KEY]: game_id,
    [DIFFICULTY_KEY]: difficulty
  };
  return jwt.sign(payload, TOKEN_SECRET_GAME_ID, { expiresIn: '24h' });
};

const verifyQuestionToken = (questionToken) => {
  return jwt.verify(questionToken, TOKEN_SECRET_GAME_ID);
};

module.exports = {
  generateQuestionToken,
  verifyQuestionToken
};