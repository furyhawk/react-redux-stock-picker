const fs = require('fs');
const raw = require('./raw-data');

const stocksDataArray = raw.datatable.data;

const stocksObj = stocksDataArray.reduce((stocksObj, [ticker, date, price]) => {
  stocksObj[ticker] = stocksObj[ticker] ?
    stocksObj[ticker] :
    {ticker, eodPriceByDay: {}};
    
  stocksObj[ticker].eodPriceByDay[date] = price;
  
  return stocksObj;
}, {});

// const stocksObj = stocksDataArray.reduce((tempObj, stockData) => {
//   tempObj[stockData[0]] = {
//     ticker: stockData[0],
//     eodPriceByDay: 
//       (tempObj[stockData[0]])
//     ? Object.assign(
//         tempObj[stockData[0]].eodPriceByDay,
//         {[stockData[1]]: stockData[2]}
//       )
//     : 
//       {[stockData[1]]: stockData[2]}
//   };
//   return tempObj;
// }, {});

fs.writeFileSync('output1.txt', JSON.stringify(stocksObj, null, 2));
