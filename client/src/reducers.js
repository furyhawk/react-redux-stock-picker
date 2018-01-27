import {combineReducers} from 'redux';
import * as StocksActions from './actions/StocksActions';
import moment from 'moment';

const initialState = {
  date: moment().format('YYYY-MM-DD'),
  stocks: {
    isFetching: false,
    data: {},
    error: null
  },
};

const stocks = (state = initialState.stocks, action) => {
  switch (action.type) {
    case StocksActions.GET_STOCKS_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case StocksActions.GET_STOCKS_SUCCESS: {
      // console.log("case StocksActions.GET_STOCKS_SUCCESS", action.data);
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    }
    case StocksActions.GET_STOCKS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}; 
const stocksApp = combineReducers({stocks});

export default stocksApp;