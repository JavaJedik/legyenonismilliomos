const express = require('express');
const mariadb = require('mariadb');

const app = express();
const port = process.env.PORT || 5000;

// Konfiguráld a MariaDB kapcsolatot

app.get('/', (req, res) => 
{
  // Ellenőrizd a MariaDB-vel való kommunikációt és válaszold megfelelően
  res.send('Hello World');
});

app.listen(port, () => 
{
  console.log(`Server is running on port ${port}`);
});
