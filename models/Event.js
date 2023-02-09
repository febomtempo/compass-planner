const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
