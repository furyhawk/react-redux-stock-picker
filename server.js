// FETCH
// ----------
require('es6-promise').polyfill();
require('isomorphic-fetch');

// DOTENV
// ----------
require('dotenv').config();

// EXPRESS
// ----------
const express = require('express');
const app = express();

// QUANDL API
// ----------
const urlFormatter = () => {};

// ROUTES
// ----------
app.get('/', (req, res) => {
  res.send('hello world');
});

// ERROR HANDLING
// ----------
app.use((err, req, res, next) => {
  console.error("Error: ", err.stack);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
});

// SERVER START
// ----------
const port = process.env.PORT;
app.listen(port);