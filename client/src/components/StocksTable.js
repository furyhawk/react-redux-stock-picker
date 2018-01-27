import React from 'react';
import {Table} from 'reactstrap';
import ColumnHeadings from '../components/ColumnHeadings';
import moment from 'moment';

const StocksTable = (stocks, dates) => {
  const colHeadings = [
    "Symbol",
    "Price",
    ...dates.map(date => moment(date).format('MM-DD')),
     "Trade"
  ];
  
  const tableData = stocks.map(stockData => {
    let prices = dates.map(date => (<td>{stockData.eodPriceByDay[date]}</td>));
    return (
      <tr>
        <td>{stockData.ticker}</td>
        {prices}
      </tr>
    );
  });

  return (
    <Table>
          <thead>
            <tr>
              <ColumnHeadings 
                headings= {colHeadings}
              />
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </Table>
    
  );
};

export default StocksTable;