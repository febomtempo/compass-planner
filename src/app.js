const express = require('express');
const db = require('../database/connect');

const app = express();
app.use(express.json());

db();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: `It's working!!! ✌️`,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
