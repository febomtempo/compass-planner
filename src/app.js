const express = require('express');
const cors = require('cors');
const db = require('../database/connect');
const eventRouter = require('../routes/eventRoutes');

const app = express();
app.use(cors());
app.use(express.json());

db();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: `It's working!!! ✌️`,
  });
});

app.use('/api/v1/events', eventRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
