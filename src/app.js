const express = require('express');
const cors = require('cors');
const db = require('../database/connect');
const eventRouter = require('../routes/eventRoutes');
const userRouter = require('../routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

db();

app.use('/api/v1/events', eventRouter);
app.use('/api/v1/users', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
