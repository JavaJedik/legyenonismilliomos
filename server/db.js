const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9999',
  database: 'milliomos'
});

connection.connect(err => {
  if (err) {
    console.error('Hiba a MariaDB adatbázishoz való csatlakozás során: ' + err.stack);
    return;
  }
  console.log('Sikeresen csatlakozva a MariaDB adatbázishoz');
});

module.exports = connection;
