const stocksObj = require('./stocksObject');
const stocksDefaultList = require('../default-settings/defaultSettings');
const selectedDates = ['2017-12-27','2017-12-20','2017-12-13'];

const getData = (stocks=stocksDefaultList, dates=selectedDates) => {
  return stocks.map(ticker => {
    const eodPriceByDay = dates.reduce((prices, date) => {
      console.log(stocksObj[ticker]);
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
      




// console.log(requestedData)






// export const getData = (dates, stocks) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const chosenStocks = stocks.map(stockSymbol => stocksObj[stockSymbol]);
//       const requestedData = chosenStocks.map(stock => {
//         return {
//           ticker: stock.ticker,
//           eodPriceByDay: dates.reduce((dateObj, date) => {
//             return Object.assign(
//               dateObj, 
//               {[date]: stock.eodPriceByDay[date]}
//             );
//           }, {})
//         };
//       });
//       console.log(requestedData)
//       resolve()
//     }, 1000);
//   });
// }