// DOTENV
// ----------
require('dotenv').config();

// EXPRESS
// ----------
const express = require('express');
const app = express();

// QUANDL API
// ----------
const dataService = require('./quandlData');

// ROUTES
// ----------
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/getEodData', (req, res) => {
  const requestedStocks = req.query.stocks;
  const requestedDates = req.query.dates;
  dataService.getData(requestedStocks, requestedDates)
  .then(json => {
    console.log("server response",json);
    res.json(json)
    
  });
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