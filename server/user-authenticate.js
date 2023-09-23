const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateRandomKey = () => {
  const randomBytes = crypto.randomBytes(144); // 8 * 16, azaz 16 betű
  const asciiString = randomBytes.toString('ascii');
  return asciiString;
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
