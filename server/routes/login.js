const express = require('express');
const cors = require('cors');
const router = express.Router();
const db = require('../db');

router.use(cors());

router.post('/', (req, res) => {
  const { username, password } = req.body;

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
      return res.json({ success: true, message: 'Bejelentkezés sikeres' });
    } else {
      return res.status(401).json({ success: false, message: 'Nem megfelelő felhasználónév vagy jelszó' });
    }
  });
});

module.exports = router;
