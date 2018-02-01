const moment = require('moment');

// NAVS
// ----------
const navs = {
  Trade: '/trade',
  Transactions: '/transactions',
  Portfolio: '/portfolio'
};
          
// PORTFOLIO
// ----------
const INITIAL_CASH_ON_HAND = 100000;


// DATES 
// ----------
const DEFAULT_LATEST_DATE = '2017-12-29';
const DEFAULT_EARLIEST_DATE = '2017-01-02';
const DEFAULT_DATE_INTERVAL = [0,7,14,28]; 
const createDatesList = (latestDate) => {
  return DEFAULT_DATE_INTERVAL.map(interval => {
    // console.log(interval);
    console.log(moment(latestDate).subtract(interval, 'days').format('YYYY-MM-DD'));
    return moment(latestDate).subtract(interval, 'days').format('YYYY-MM-DD');
  });
};
const datesDefaults = createDatesList(DEFAULT_LATEST_DATE);
const isWeekDay = (momentObj) => momentObj.isoWeekday() < 6; 
const createWeekdayArray = (earliestDate, latestDate) => {
  let i = 0;
  let weekdayArray = [];
  while(moment(earliestDate).add(i, 'days').isSameOrBefore(latestDate)) {
    if (isWeekDay(moment(earliestDate).add(i, 'days'))) {
      weekdayArray.push(moment(earliestDate).add(i, 'days').format('YYYY-MM-DD'));
    }
    i++;
  }
  return weekdayArray;
};
const dateSliderArray = createWeekdayArray(DEFAULT_EARLIEST_DATE, DEFAULT_LATEST_DATE);
// console.log("dateSliderArray", dateSliderArray);
// console.log("datesDefaults", datesDefaults);

// STOCKS
// ----------
const stocksDefaults =  [
  "AAPL","AMZN","DIS","GOOG","INTC","LUV","MRK","MSFT","NFLX","NKE","NVDA","QCOM","SBUX","TSLA","VZ"
];

module.exports = {
  navs,
  INITIAL_CASH_ON_HAND,
  DEFAULT_EARLIEST_DATE,
  DEFAULT_LATEST_DATE,
  DEFAULT_DATE_INTERVAL,
  createDatesList,
  dateSliderArray,
  datesDefaults,
  stocksDefaults
};


