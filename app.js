// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Export the app and server for testing purposes
module.exports = { app, server };