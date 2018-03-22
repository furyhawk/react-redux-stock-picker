import React, {Component} from 'react';
import {Table} from 'reactstrap';
import ColumnHeadings from '../components/ColumnHeadings';
import ViewHeader from '../components/ViewHeader';


const Filter = () => {
  return null;
};


class TransactionsContainer extends Component {
  render() {
    return (
      <div>
        <ViewHeader heading={'Transactions'} />
        <Filter />
        <Table>
          <thead>
            <tr>
              <ColumnHeadings 
                headings= {["Date","Symbol","Type","Quantity","Price"]}
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
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  
}

export default TransactionsContainer;