import React, {Component} from 'react';
import {Table} from 'reactstrap';

const SummaryColumnHeadings = () => {
  const headings = [
    "Cost Basis",
    "Current Value",
    "Profit/Loss",
    "7d",
    "14d",
    "28d"
  ];
  return headings.map((header, i) => <th key={i}>{header}</th>);
};
const DetailColumnHeadings = () => {
  const headings = [
    "Symbol",
    "Quantity",
    "Cost Basis",
    "Current Value",
    "Profit/Loss",
    "Current Price",
    "7d",
    "14d",
    "28d",
    "Trade?",
  ];
  return headings.map((header, i) => <th key={i}>{header}</th>);
};


class PortfolioContainer extends Component {
  render(){
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <SummaryColumnHeadings />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </Table>
         <Table>
          <thead>
            <tr>
              <DetailColumnHeadings />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>the Bird</td>
              <td>the Bird</td>
              <td>the Bird</td>
              <td>the Bird</td>
              <td>the Bird</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PortfolioContainer;