'use strict';

const userSchema = (sequelizeDatabase, DataTypes) => {
  const model = sequelizeDatabase.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // sequelize allows us to interac twith the userModel before adding data to the database using the beforeCreate hook
  model.beforeCreate((user) => {
    // let user = await 
    console.log(`our user:${user}.`);
  });
  return model;
};

module.exports = userSchema;