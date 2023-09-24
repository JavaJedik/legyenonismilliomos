const express = require('express');
const router = express.Router();
const { verifyToken } = require('../user-authenticate');

router.post('/', (req, res) => {
  const { userToken } = req.body;

  if (!userToken) {
    return res.status(401).json({ success: false, message: 'Token not provided' });
  }

  try {
    const decodedToken = verifyToken(userToken);
    const { username } = decodedToken;

    return res.json({ success: true, message: 'Token is valid', username });
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
});

module.exports = router;