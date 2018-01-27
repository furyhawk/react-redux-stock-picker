// FETCH
// ----------
require('es6-promise').polyfill();
require('isomorphic-fetch');
/* global fetch */

// MOMENT
// ----------
var moment = require('moment');

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

worker.dataFormatter = (responseJson, dates) => {
  if (!responseJson.datatable || responseJson.datatable.data.length <= 0) {
    return [];
  }
  const stocksDataArray = responseJson.datatable.data;
  dates = decodeURIComponent(dates).split(',');
  const datesTemplate = dates.reduce((dateObj, dateString, i) => {
    if (i === 0) dateObj[dateString] = '0';
    dateObj[dateString] = moment(dateString).diff(moment(dates[i-1]), 'days').toString();
  }, {});
  
  var tempObj = {};
  responseJson.datatable.data.forEach(stockData => {
    tempObj[stockData[0]] = {
      ticker: stockData[0],
      eodPriceByDay: [
        ...tempObj.dates, 
        {[datesTemplate[stockData[1]]]: stockData[2] || 'NA'}
      ]
    };
  });
  console.log(Object.values(tempObj));
  return Object.values(tempObj);
  };

dataService.getData = (stocks, dates) => {
  console.log("request",worker.urlFormatter(stocks, dates));
  return fetch(worker.urlFormatter(stocks, dates))
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    return response.json();
  })
  .then(responseJson => worker.dataFormatter(responseJson, dates))
  .catch(error => error);
};
module.exports = dataService;
