"use strict";

require("dotenv").config();
const express = require("express");
const authRoter = require("./auth/router");

const PORT = process.env.PROT || 3002;
const app = express();

app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));


sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('server up'));
    }).catch(e => {
        console.error('Could not start server', e.message);
    });



const start = () => {
  app.listen(PORT, console.log(`listening on ${PORT}`));
};

module.export = { app, start};