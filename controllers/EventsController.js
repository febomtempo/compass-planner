const { isValidObjectId } = require('mongoose');
const Event = require('../models/Event');

exports.checkBody = (req, res, next) => {
  if (!req.body.description || !req.body.dateTime) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing description or dateTime',
    });
  }
  next();
};

exports.createEvent = async (req, res) => {
  try {
    const event = {
      description: req.body.description,
      dateTime: req.body.dateTime,
    };

    const data = await Event.create(event);

    res.status(201).json({
      data,
      message: 'Event created successfully',
    });
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    const weekDay = req.query.dayOfTheWeek;
    if (req.query.dayOfTheWeek) {
      const eventsFilteredByWeekDay = events.filter(
        (event) => event.dateTime.getDay() === +weekDay
      );
      res.status(200).json({
        eventsFilteredByWeekDay,
      });
    } else {
      res.status(200).json({
        events,
      });
    }
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
      return;
    }
    const event = await Event.findById(id);
    if (!event) {
      res.status(404).json({
        status: 'fail',
        message: 'ID not found',
      });
      return;
    }
    res.status(200).json({
      event,
    });
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};

exports.deleteEventById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
      return;
    }
    const event = await Event.findById(id);
    if (!event) {
      res.status(404).json({
        status: 'fail',
        message: 'ID not found',
      });
      return;
    }
    event.deleteOne({
      id: event.id,
    });
    res.status(200).json({
      status: 'success',
      message: 'Event deleted!',
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};
