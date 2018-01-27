/* global fetch */
import getDataPromise from '../temp-data/tempDataWrapper';
const stocksDefaultList = require('../default-settings/defaultSettings');

export const GET_STOCKS_REQUEST="GET_STOCKS_REQUEST";
export const GET_STOCKS_FAILURE="GET_STOCKS_FAILURE";
export const GET_STOCKS_SUCCESS="GET_STOCKS_SUCCESS";

export const getStocksRequest = () => {
  return {
    type: GET_STOCKS_REQUEST
  };
};
export const getStocksSuccess = (data) => {
  // console.log("getStocksSuccess", data);
  return {
    type: GET_STOCKS_SUCCESS,
    data: data
  };
};
export const getStocksFailure = (error) => {
  return {
    type: GET_STOCKS_FAILURE,
    error: error
  };
};
export const getStocks = (stocksArray=stocksDefaultList, datesArray) => {
  const stocks = stocksArray;
  const dates = datesArray && datesArray.length > 0 
    ? datesArray 
    : ['2017-12-27','2017-12-20','2017-12-13'];
  
  return (dispatch) => {
    dispatch(getStocksRequest());
    console.log("making fetch call - client side");
    
    getDataPromise(stocks, dates)
    // .then(response => {
    //   console.log("getting a response - client side", response);
    //   if (!response.ok) {
    //     throw new Error(`${response.status}: ${response.statusText}`);
    //   }
    //   return response.json();
    // })
    .then(json => dispatch(getStocksSuccess(json)))
    .catch(error => dispatch(getStocksFailure(error)));
  };
};
// export const getStocks = (stocksArray=stocksDefaultList, datesArray) => {
//   const stocks = stocksArray.toString();
//   const dates = datesArray && datesArray.length > 0 ? datesArray.toString() : moment().format('YYYY-MM-DD');
  
  
//   return (dispatch) => {
//     dispatch(getStocksRequest());
//     console.log("making fetch call - client side");
    
//     var myHeaders = new Headers();

//     var myInit = { method: 'GET',
//                   headers: myHeaders,
//                   mode: 'cors',
//                   cache: 'default' };
    
//     var myRequest = new Request(
//       `/getEodData/?stocks=${encodeURIComponent(stocks)}&dates=${encodeURIComponent(dates)}`, 
//       myInit
//     );
    
//     fetch(myRequest)
//     .then(response => {
//       console.log("getting a response - client side", response);
//       if (!response.ok) {
//         throw new Error(`${response.status}: ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .then(json => dispatch(getStocksSuccess(json)))
//     .catch(error => dispatch(getStocksFailure(error)));
//   };
// };