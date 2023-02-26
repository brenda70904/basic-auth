"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./user');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(process.env.DATABASE_URL);

const userModel = userSchema(sequelizeDatabase,);

module.exports = { sequelizeDatabase, userModel };