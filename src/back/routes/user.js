const router = require('express').Router();
const User = require('../models').user;

const userRouter = () => {
  const createUser = (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const data = { email, password, first_name: firstName, last_name: lastName };

    User.create(data)
    .then((user) => {
      // Turns user instance into a plain object and then removes the password
      const plainUser = user.get({ plain: true });
      delete plainUser.password;

      res.send(plainUser);
    })
    .catch((err) => {
      res.status(400);
    })
  };


  router.route('/')
    .post(createUser)


  return router;
}

module.exports = userRouter();
