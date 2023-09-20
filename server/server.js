const express = require('express');
const cors = require('cors');
const app = express();
const loginRoute = require('./routes/login');
const db = require('./db');

app.use(cors());
app.use(express.json());
app.use('/login', loginRoute);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`A szerver fut a ${PORT}-es porton`);
});
