import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'reactstrap';
import ColumnHeadings from '../components/ColumnHeadings';
import ViewHeader from '../components/ViewHeader';


class PortfolioContainer extends Component {
  
  render(){
    return (
      <div>
        <ViewHeader heading={'Portfolio'} />
        <Table size='sm'>
          <thead>
            <tr>
              <ColumnHeadings 
                headings={["Cost Basis","Current Value","Profit/Loss","7d","14d","28d"]}
              />
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
              <ColumnHeadings 
                headings = {[ 
                  "Symbol","Quantity","Cost Basis","Current Value","Profit/Loss","Current Price","7d","14d","28d","Trade?"
                ]} 
              />
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

const mapStateToProps = (state) => {
  return {
    cash: state.portfolio.cash,
    history: state.portfolio.history
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);