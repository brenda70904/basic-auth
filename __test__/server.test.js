'use strict';

const { app } = require('../src/app.js');
const supertest = require('supertest');
const request = supertest(app);
const { sequelizeDatabase } = require('../index.js');
const { response } = require('express');

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('/signup route', () => {
  it('should create a new user', async () => {
    let response = await request.post('/signup').send({
      username: 'brenda',
      password: '321',
    });

    expect(response.status).toBe(200);
    expect(response.body.username).toEqual('brenda');
  });

  it('should allow sign in', async () => {
    let response = await request.post('./signin').auth('brenda','321');

    expect(response.status).toBe(200);
  });
});