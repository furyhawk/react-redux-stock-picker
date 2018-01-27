import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStocks} from '../actions/StocksActions';
import StocksTable from '../components/StocksTable';
const stocksDefaultList = require('../default-settings/defaultSettings');


const Filter = () => {
  return null;
};

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
    date: state.date
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStocks: (selectedStocks, selectedDates) => {
      dispatch(getStocks(selectedStocks, selectedDates));
    }
  };
};

class StocksTableContainer extends Component {
  componentDidMount() {
    console.log("componentDidMount","calling getStocks");
    this.props.getStocks(stocksDefaultList, ['2017-12-27','2017-12-20','2017-12-13','2017-12-6']);
  }
  
  render() {
    return (
      <div>
        <Filter />
        <StocksTable stocks={this.props.stocks} dates={this.props.dates}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StocksTableContainer)