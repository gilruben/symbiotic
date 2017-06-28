const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');


// Function for adding middleware
const applyExpressMiddleware = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};

module.exports = applyExpressMiddleware;
