const User = require('../models/User');

exports.checkBody = (req, res, next) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.birthDate ||
    !req.body.city ||
    !req.body.country ||
    !req.body.email ||
    !req.body.password ||
    !req.body.confirmPassword
  ) {
    return res.status(400).json({
      status: 'fail',
      message:
        'All items (firstName, lastName, birthdate, city, country, email, password, confirmPassword) are required!',
    });
  }
  next();
};

exports.createUser = async (req, res) => {
  try {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      city: req.body.city,
      country: req.body.country,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };

    if (req.body.password === req.body.confirmPassword) {
      const data = await User.create(user);
      res.status(201).json({
        data,
        message: 'user created successfully',
      });
    } else {
      res.status(401).json({
        status: 'fail',
        message: 'password and confirmPassword must be the same!',
      });
      return;
    }
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};

exports.signIn = async (req, res) => {
  try {
    const reqData = {
      email: req.body.email,
      password: req.body.password,
    };
    console.log(reqData);
    const userData = await User.findOne({
      email: reqData.email,
    }).exec();
    console.log(userData);
    if (
      reqData.email === userData.email &&
      reqData.password === userData.password
    ) {
      res.status(200).json({
        status: 'success',
        message: 'Successful sign in',
      });
    } else {
      res.status(401).json({
        status: 'fail',
        message: 'Incorrect e-mail or password',
      });
    }
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};
