import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button, Alert} from 'reactstrap';
import {LegendLabel, LegendInput, LegendValidatedInput} from './TradeFormComponents';
import ViewHeader from '../components/ViewHeader';

const Trade = ({props, state, storeTransaction, onChangeQuantity, chooseBuy, chooseSell}) => {
  let {currentTicker, currentPrice, cash} = props;
  let {quantity, canBuy, canSell, alert, okToStoreTransaction} = state;
  return (
    <div className="Trade">
    {alert.send ? <Alert color={alert.color}>{alert.message}</Alert> : <div></div>}
    <ViewHeader heading={'Trade'} />
    <Form onSubmit={storeTransaction}>  
      <p>Choose a symbol to trade from the Stocks Panel</p>
      <LegendLabel
        legendTxt={'Cash On Hand: '} 
        labelTxt={`$${cash}`}
      />
      <LegendLabel
        legendTxt={'Symbol: '} 
        labelTxt={currentTicker && `${currentTicker} @ $${currentPrice}`}
      />
      <LegendInput legendTxt={'Quantity: '} >
        <Input onChange={onChangeQuantity} type="text" name="quantity" id="quantity" value={quantity} pattern="[0-9]*"  />
      </LegendInput>
      <FormGroup tag="fieldset" >
        <LegendValidatedInput 
          legendTxt={'Buy/Sell'} 
          labelText={'Buy'}
          formGroupCheck={false}
          validation={quantity <= canBuy}
          valueIfTrue={canBuy}
          errorTextIfFalse={`You'll need more cash to buy this quantity on this date. Sell other shares from your portfolio to get cash.`}
          onChange={chooseBuy}
        />
        <LegendValidatedInput 
          labelText={'Sell'}
          formGroupCheck={false}
          validation={quantity <= canSell}
          valueIfTrue={canSell}
          errorTextIfFalse={`You have no shares of this stock to sell on this date. Buy some at an earlier date.`}
          onChange={chooseSell}
        />
      </FormGroup>
      {okToStoreTransaction && <Button type="submit" color="primary">Place Order</Button>}
    </Form>  
  </div>
  );
};

export default Trade;