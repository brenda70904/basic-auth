'use strict';

require('dotenv').config();
const express = require('express');
const router = require('./auth/router');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());

// Process FORM intput and put the data on req.body 
app.use(express.urlencoded({ extended: true }));
app.use(router);

const start = () => {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
};

module.exports = { app, start };