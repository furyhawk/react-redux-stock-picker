import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormGroup, Input, Label, Button, Alert} from 'reactstrap';
import {setCurrentTicker} from '../actions/TradeActions';
import {storeTransactionToPortfolio} from '../actions/PortfolioActions';
const moment = require('moment');

const mapStateToProps = (state) => {
  return {
    date: state.date.current,
    currentTicker: state.trades.currentTicker,
    currentPrice: state.trades.currentPrice,
    cash: state.portfolio.cash,
    history: state.portfolio.history 
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentTicker: (ticker) => {
      dispatch(setCurrentTicker(ticker));
    },
    storeTransactionToPortfolio: (transaction) => {
      dispatch(storeTransactionToPortfolio(transaction));
    }
  };
};

class TradeContainer extends Component {
  constructor(props) {
    super(props);
    console.log("props in TradeContainer", props);
    this.state = {
      canBuy: 0,
      canSell: 0,
      quantity: 10, 
      buyOrSell: null,
      okToStoreTransaction: true,
      alert: {
        send: false,
        message: "",
        color: ""
      }
    };
  }
  componentDidMount() {
    this.checkCanBuyOrSell();
    this.checkTransaction();
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentTicker !== prevProps.currentTicker) {
      console.log("componentDidUpdate - entering validations");
      this.checkCanBuyOrSell();
      this.checkTransaction();
    }
  }

  storeTransaction = (e) => {
    let {quantity, buyOrSell} = this.state;
    let {date, currentTicker, currentPrice, cash} = this.props;
    e.preventDefault();
    this.props.storeTransactionToPortfolio({
      cash: cash - quantity*currentPrice,
      transaction: {
        ticker: currentTicker,
        date: date,
        price: currentPrice,
        quantity: buyOrSell === 'buy' ? quantity : -1*quantity
      }
    });
  }
  
  // FORM HANDLERS
  // ----------
  onChangeQuantity = (e) => {
    if (!isNaN(e.target.value)){
      this.setState({quantity: +e.target.value}, this.checkTransaction);
      // this.checkTransaction();
    }
  }
  chooseBuy = () => {
    this.setState({buyOrSell: 'buy'}, this.checkTransaction);
    // this.checkTransaction();
  }
  chooseSell = () => {
    this.setState({buyOrSell: 'sell'}, this.checkTransaction);
    // this.checkTransaction();
  }
  // ----------
  
  // FORM VALIDATIONS
  // ----------
  
  checkCanBuyOrSell() {
    let {date, currentTicker, currentPrice, cash, history,} = this.props;
    let canBuy = 0;
    let canSell = 0;

    if (currentPrice) {
      canBuy = Math.floor(cash / currentPrice);
      console.log("canBuy", canBuy);
    }
    
    const sumOfHoldings = (holdings, transaction) => holdings += transaction.quantity;
    
    if (currentTicker && history[currentTicker]) {
      let holdingsAllOfHistory = history[currentTicker].reduce(sumOfHoldings);
      let holdingsUpToCurrentDate = history[currentTicker]
        .filter(transaction => moment(date).isSameOrAfter(transaction.date))
        .reduce(sumOfHoldings);
      canSell = holdingsAllOfHistory < holdingsUpToCurrentDate ? holdingsAllOfHistory : holdingsUpToCurrentDate;
    }
    
    console.log("canBuy", canBuy);
    console.log("canSell", canSell);
    this.setState({canBuy, canSell}, ()=>console.log("checkCanBuyOrSell has set state", this.state));
  }
  
  checkTransaction = () => {
    let {quantity, canBuy, canSell, buyOrSell} = this.state;
    let okToStoreTransaction = false;
    let alert = {
      send: false,
      message: '',
      color: 'danger'
    };
    
    switch (buyOrSell) {
      case 'buy': {
        if (quantity > canBuy) {
          alert.send = true;
          alert.message = 'You need more cash to buy this stock on this date.';
          okToStoreTransaction = false;
        } else {
          okToStoreTransaction = true;
          alert.send = false;
        }
        console.log("checkTransaction",okToStoreTransaction);
        break;
      }
      case 'sell': {
        if (quantity > canSell) {
          alert.send = true;
          alert.message = 'You need own this stock on this date before you can buy it.';
          okToStoreTransaction = false;
        } else {
          okToStoreTransaction = true;
          alert.send = false;
        }
        break;
      } 
      default: { 
        okToStoreTransaction = false;
        alert.send = false;
        buyOrSell = null;
        break;
      }
    }
    this.setState({okToStoreTransaction, alert}, ()=>console.log("checkTransaction has set state", this.state));
  }
  
  render(){
    console.log("props & state TradeContainer", this.props, this.state);
    let {currentTicker, currentPrice, cash} = this.props;
    let {quantity, canBuy, canSell, alert, okToStoreTransaction} = this.state;
    
    console.log("canBuy in render", canBuy);
    return  (
      <div className="Trade">
        {alert.send ? <Alert color={alert.color}>{alert.message}</Alert> : <div></div>}
        <h2>Trade</h2>
        <Form onSubmit={this.storeTransaction}>  
          <p>Choose a symbol to trade from the Stocks Panel</p>
          <legend>Cash On Hand: </legend>
          <Label>${cash}</Label>
          <legend>Symbol: </legend>
          <Label>{currentTicker ? `${currentTicker} @ $${currentPrice}` : ''}</Label>
          <legend>Quantity: </legend>
          <FormGroup>            
            <Input onChange={this.onChangeQuantity} type="text" name="quantity" id="quantity" value={this.state.quantity} pattern="[0-9]*"  />
          </FormGroup>
          <FormGroup tag="fieldset">
          <legend>Buy/Sell</legend>
            <FormGroup check> {
              quantity <= canBuy 
                ? <Label><Input onChange={this.chooseBuy} type="radio" name="Buy" />{' '}Buy{`   Max: ${canBuy}`}</Label>  
                : <div><Label><Input type="radio" name="Buy" disabled />{' '}<div className="text-muted">Buy</div></Label>
                  {' '}<div className="text-danger"> You'll need more cash to buy this quantity on this date. Sell other shares from your portfolio to get cash.</div></div>
              }
            </FormGroup>
            <FormGroup check> {
              quantity <= canSell 
                ? <Label><Input onChange={this.chooseSell} type="radio" name="Sell" />{' '}Sell{`   Max:${canSell}`}</Label>  
                : <div><Label><Input type="radio" name="Sell" disabled />{' '}<div className="text-muted">Sell</div></Label>
                  {' '}<div className="text-danger">You have no shares of this stock to sell on this date. Buy some at an earlier date.</div></div>
              }
            </FormGroup>
          </FormGroup>
          {okToStoreTransaction ? <Button type="submit" color="primary">Place Order</Button> : <div></div>}
        </Form>  
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TradeContainer);

        
  
          
          