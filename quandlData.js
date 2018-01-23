// FETCH
// ----------
require('es6-promise').polyfill();
require('isomorphic-fetch');
/* global fetch */


// REQUEST URL CONSTANTS
// ----------
const KEY = 'api_key='+process.env.API_KEY_QUANDL;
const COLUMN_OPTS = 'qopts.columns=ticker,date,close'
const ROOT_URL = 'https://www.quandl.com/api/v3/datatables/WIKI/PRICES/';

var dataService = {};
var worker = {};

worker.urlFormatter = (requestedStocks, requestedDates) => {
  return (
    ROOT_URL+
    '?'+
    'ticker='+requestedStocks+'&'+
    'date='+requestedDates+'&'+
    COLUMN_OPTS+'&'+
    KEY
  );
};

worker.dataFormatter = (responseJson) => {
  return responseJson.datatable.data.map(stockData => {
    return {
      ticker: stockData[0],
      date: stockData[1],
      close: stockData[2]
    };
  });
};

dataService.getData = (stocks, dates) => {
  console.log("request",worker.urlFormatter(stocks, dates));
  var result = fetch(worker.urlFormatter(stocks, dates))
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    return response.json();
  })
  .then(responseJson => worker.dataFormatter(responseJson))
  .catch(error => error);
  
  return result;
};
module.exports = dataService;
