const express = require('express');
const path = require('path');
const db = require('./models');
const router = require('./routes');
const applyExpressMiddleware = require('./middleware');

const app = express();

// Adds middleware to express
applyExpressMiddleware(app);

// API route
app.use('/api', router);


db.sequelize.sync().then(() => {
  const port = process.env.PORT || 5555;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});

module.exports  = app;
