const express = require('express');
const UsersController = require('../controllers/UsersController');

const router = express.Router();

router
  .route('/signUp')
  .post(UsersController.checkBody, UsersController.createUser);

router.route('/signIn').post(UsersController.signIn);

module.exports = router;
