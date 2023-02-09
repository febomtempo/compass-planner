const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

async function connect() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(
      `mongodb+srv://felipe:${process.env.MONGO_PASSWORD}@cluster0.bylukch.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log('Connected to Database');
  } catch (err) {
    console.log(`Connection Error: ${err}`);
  }
}

module.exports = connect;
