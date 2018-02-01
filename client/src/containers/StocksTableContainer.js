import React, {Component} from 'react';
import {connect} from 'react-redux';
import StocksTable from '../components/StocksTable';
import {getStocks} from '../actions/StocksActions';
import {setCurrentTicker} from '../actions/TradeActions';

const {stocksDefaults, createDatesList, DEFAULT_LATEST_DATE} = require('../helpers/helpers');

const Filter = () => {
  return null;
};

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
    date: state.date,
    currentTicker: state.trades.currentTicker
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStocks: (selectedStocks, selectedDates, currentDate, currentTicker) => {
      dispatch(getStocks(selectedStocks, selectedDates, currentDate, currentTicker));
    },
    setCurrentTicker: (e, currentTicker, currentPrice) => {
      console.log("setCurrentTicker", e, currentTicker);
      dispatch(setCurrentTicker({currentTicker, currentPrice}));
    }
  };
};

class StocksTableContainer extends Component {
  
  componentDidMount() {
    let {currentTicker, getStocks, date: {current}} = this.props;

    getStocks(stocksDefaults, createDatesList(current), current, currentTicker);
  }
  
  componentWillReceiveProps(nextProps) {
    let {currentTicker, getStocks, date: {current}} = nextProps;
    console.log("componentWillReceiveProps", "this.props.date.current", this.props.date.current, "nextProps.date.current", nextProps.date.current);
    if (this.props.date.current !== nextProps.date.current) {
      getStocks(stocksDefaults, createDatesList(current), current, currentTicker);
    }
  }
  
  // componentDidUpdate(prevProps) {
  //   let {setCurrentTicker, currentTicker, stocks, date} = this.props;
  //   if (currentTicker && date !== prevProps.date) {
  //     console.log(stocks);
  //     let currentPrice = stocks.data
  //                             .filter(
  //                               stockData => 
  //                               stockData.ticker === 
  //                               currentTicker)
  //                             .eodPriceByDay[date];
  //     setCurrentTicker(null, currentTicker, currentPrice);
  //   }
  // }
  
  render() {
    const {setCurrentTicker, stocks, date: {current}} = this.props;
    console.log("rendering StocksTableContainer", stocks);
    return (
      <div>
        <Filter />
        <StocksTable 
          stocks={stocks} 
          dates={createDatesList(current)}
          setCurrentTicker={setCurrentTicker}
          currentDate={current}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(StocksTableContainer);


    // console.log("componentDidMount","calling getStocks");
    // this.props.getStocks(stocksDefaults, datesDefaults);
    // console.log("this.props.date.current", this.props.date.current);
    // console.log("createDatesList(this.props.date.current)", createDatesList(this.props.date.current));