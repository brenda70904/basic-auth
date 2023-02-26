"use strict";

const { app } = require('../src/app.js');
const supertest = require('supertest');
const request = supertest(app);
const { sequelizeDatabase } = require('../index.js');

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe("/signup route", () => {
  it("should create a new user", async () => {
    let response = await request.post("/signup").send({
      username:"brenda",
      password:"321"
    });

    expect(response.status).toBe(200);
    expect(response.body.username).toEqual("brenda");
  });

  



});