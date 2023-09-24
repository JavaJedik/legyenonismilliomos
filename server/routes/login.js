const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('../db');
const userAuth = require('../user-authenticate');

router.use(cors());
router.use(bodyParser.json());

router.post('/', (req, res) => {
  try {
    const requestData = req.body;

    if (!requestData || typeof requestData !== 'object') {
      throw new Error('Invalid request format');
    }

    const { username, password } = requestData;

    if (!username || !password) {
      throw new Error('Invalid request format');
    }

    const sql = `
      SELECT p.name, pw.password
      FROM player p
      JOIN password pw ON p.id = pw.player_id
      WHERE p.name = ? AND pw.password = ?;
    `;

    db.query(sql, [username, password], (error, results) => {
      if (error) {
        return res.status(500).json({ success: false, message: 'Database error' });
      }

      if (results.length > 0) {
        const user = { username };
        const token = userAuth.generateToken(user);
        return res.json({ success: true, message: 'Bejelentkezés sikeres', token });
      } else {
        return res.status(401).json({ success: false, message: 'Nem megfelelő felhasználónév vagy jelszó' });
      }
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Invalid JSON format' });
  }
});

module.exports = router;