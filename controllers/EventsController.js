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
};

module.exports = EventsController;
