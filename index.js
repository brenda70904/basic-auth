"use strict";

const { start } = require("./src/server");
const { sequelizeDatabase } = require('./src/auth/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log("successful connection");
    // app.listen(3000, () => console.log('server up'));
    start();
  }).catch(e => {
    console.error('Could not start server', e.message);
  });