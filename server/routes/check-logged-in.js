const express = require('express');
const router = express.Router();
const { verifyToken } = require('./user-authenticate');

router.post('/', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Token not provided' });
  }

  try {
    const decodedToken = verifyToken(token);
    const { username } = decodedToken;

    // Token érvényes, visszaküldjük a dekódolt felhasználónevet
    return res.json({ success: true, message: 'Token is valid', username });
  } catch (error) {
    // Hibás vagy lejárt token
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
});

module.exports = router;