const router = require('express').Router();
const User = require('../models').user;
const sign = require('../passport/sign-token');

const authenticate = require('passport').authenticate('jwt', { session: false });

const authRouter = () => {
  const userLogin = (req, res) => {
    const { email, password } = req.body;
    const loginData = { email, password };

    User.findOne({
      where: loginData,
      attributes: {
        exclude: ['password']
      }
    })
    .then((user) => {
      if (user) {
        req.session.jwt = sign({ id: user.id });
        req.session.save();

        res.send(user);
      } else {
        res.sendStatus(401);
      }
    })
    .catch(() => {
      res.sendStatus(401);
    });
  };

  const userLogout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const checkLoginStatus = (req, res) => {
    res.sendStatus(200);
  };


  router.route('/login')
    .post(userLogin);

  router.route('/logout')
    .post(authenticate, userLogout);

  router.route('/verify')
    .get(authenticate, checkLoginStatus);

  return router;
}

module.exports = authRouter();
