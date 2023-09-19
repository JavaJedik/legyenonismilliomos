const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection
({
  host: 'localhost',
  user: 'root', // Change if you dont need root permissions
  password: '9999', // It is just an example
  database: 'milliomos'
});

connection.connect(err => 
{
  if (err) 
  {
    console.error('Hiba a MariaDB adatbázishoz való csatlakozás során: ' + err.stack);
    return;
  }
  console.log('Sikeresen csatlakozva a MySQL adatbázishoz');
});

app.get('/player', (req, res) => 
{
  connection.query('SELECT * FROM player', (err, results) => 
  {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
{
  console.log(`A szerver fut a ${PORT}-es porton`);
});
