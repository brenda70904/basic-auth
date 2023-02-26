"use strict";

const express = require('express');
const bcrypt = require("bcrypt");
const { userModel } = require('./models');
const basicAuth = require("./middleware/basic");
const router = express.Router()

router.post('/signup', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 5);
    let newUser = await userModel.create({
      username,
      password: encryptedPassword,
    });
    res.status(200).send(newUser);
  } catch (error) {
    next('signup Error occurred');
  };
});

router.post('/signin',basicAuth, async (req, res, next) => {
  res.status(200).send(req.user);

});