import React from 'react';
import {Table} from 'reactstrap';
import {Link} from 'react-router-dom';
import ColumnHeadings from '../components/ColumnHeadings';
import moment from 'moment';

const StocksTable = ({stocks, dates, setCurrentTicker, currentDate}) => {
  console.log("StocksTable", "stocks",stocks,"dates",dates);
  const colHeadings = [
    "Symbol",
    ...dates.map(date => moment(date).format('MM-DD')),
     "Trade"
  ];
  
  const tableData = stocks.data.map((stockData, i) => {
    console.log("stockData", stockData);
    let prices = dates.map((date, j) => (<td key={j}>{stockData.eodPriceByDay[date]}</td>));
    return (
      <tr key={i}>
        <td>{stockData.ticker}</td>
        {prices}
        <td>
          <Link to={`/trade`} onClick={
            (e) => setCurrentTicker(e, stockData.ticker, stockData.eodPriceByDay[currentDate])}
          > Trade </Link>
        </td>
      </tr>
    );
  });


  return (
    <Table>
      <thead>
        <tr><h2 className="my-3">Stocks</h2></tr>
        <tr>
          <ColumnHeadings headings= {colHeadings} />
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </Table>
    
  );
};

export default StocksTable;