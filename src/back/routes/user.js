const router = require('express').Router();
const User = require('../models').user;

const authenticate = require('passport').authenticate('jwt', { session: false });

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
      res.sendStatus(400);
    })
  };

  const deleteUser = (req, res) => {
    const userId = req.user.id;

    User.destroy({
      where: {
        id: userId
      }
    })
    .then((delUser) => {
      req.session.destroy();
      res.send({ usersDeleted: delUser });
    });
  };


  router.route('/')
    .post(createUser)
    .delete(authenticate, deleteUser)

  return router;
}

module.exports = userRouter();
