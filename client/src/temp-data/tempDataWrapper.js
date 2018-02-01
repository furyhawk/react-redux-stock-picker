const stocksObj = require('./stocksObject');
const {stocksDefaults} = require('../helpers/helpers');
const {datesDefaults} = require('../helpers/helpers');

const getData = (stocks=stocksDefaults, dates=datesDefaults) => {
  return stocks.map(ticker => {
    const eodPriceByDay = dates.reduce((prices, date) => {
      // console.log(stocksObj[ticker]);
      prices[date] = stocksObj[ticker].eodPriceByDay[date];
      return prices;
    }, {});
    return {ticker, eodPriceByDay};
  });
};

const getDataPromise = (stocks, dates) => {
  // return getData(stocks, dates);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, getData(stocks, dates)) ;
  });
};

export default getDataPromise;    
      




