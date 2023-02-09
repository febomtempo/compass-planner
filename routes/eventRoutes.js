const express = require('express');
const EventsController = require('../controllers/EventsController');

const router = express.Router();

router.route('/').get(EventsController.get).post(EventsController.create);

module.exports = router;
