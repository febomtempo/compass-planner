const express = require('express');
const EventsController = require('../controllers/EventsController');

const router = express.Router();

router
  .route('/')
  .get(EventsController.getAllEvents)
  .post(EventsController.checkBody, EventsController.createEvent);

router.route('/:id').get(EventsController.getEventById);

module.exports = router;
