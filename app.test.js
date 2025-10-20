// app.test.js
const request = require('supertest');
const { app, server } = require('./app'); // Import your app

describe('GET /', () => {
  afterAll((done) => {
    server.close(done); // Close the server after all tests are done
  });

  it('should respond with Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});