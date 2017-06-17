const express = require('express');
const path = require('path');
const db = require('./models');

const app = express();

db.sequelize.sync().then(() => {
  const port = process.env.PORT || 5555;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
