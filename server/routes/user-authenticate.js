const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateRandomKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

const TOKEN_SECRET = generateRandomKey();

const generateToken = (user) => {
  return jwt.sign(user, TOKEN_SECRET, { expiresIn: '24h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, TOKEN_SECRET);
};

module.exports = {
  generateToken,
  verifyToken
};
