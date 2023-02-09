const Event = require('../models/Event');

const EventsController = {
  create: async (req, res) => {
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
  },
  get: async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json({
        events,
      });
    } catch (err) {
      console.log(`Erro: ${err}`);
    }
  },
};

module.exports = EventsController;
