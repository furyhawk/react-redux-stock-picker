# React/Redux Stock Trading (with time travel)

With the time-traveling stock picker, users can go back in time and spend fake money on stock trades to assemble their dream portfolio.

A React SPA, presenting output from Quandl's stock API for End-of-Day stock prices.

## Features
**Execute a Validated Trade**  
<img src="https://raw.githubusercontent.com/patrickklima/react-redux-stock-picker/master/docs/GIFs/1-executing-a-validated-trade.gif" 
     width="600" alt="Execute a Validated Trade">    

**Change the Date, Buy a Stock, and View Transactions**  
<img src="https://raw.githubusercontent.com/patrickklima/react-redux-stock-picker/master/docs/GIFs/2-changing-date-buying-a-stock-and-viewing-transactions.gif" width="600" alt="Change the Date, Buy a Stock, and View Transactions">

## Tech Stack
- Node.js 
- React.js 
- Reactstrap
- React-Router
- Redux
- Redux-Thunk

## Wireframes
<img src="https://raw.githubusercontent.com/patrickklima/project_fideligard_spa/master/docs/wireframes/main_with_trade.png" 
     width="450" alt="Main Trading View">  
**Main Trading View**  
_Choose a stock from the left-hand stocks panel. Buy or sell that stock if the current portfolio and cash on hand allow it._  

--------

<img src="https://raw.githubusercontent.com/patrickklima/project_fideligard_spa/master/docs/wireframes/trade_panel.png" 
     width="450" alt="Trade Panel">  
**Trade Panel**  
_Buy and sell stocks in the Trade panel. Get verification that the quantity of a purchase or sale is valid, based on the total existing portfolio._  

--------

<img src="https://raw.githubusercontent.com/patrickklima/project_fideligard_spa/master/docs/wireframes/portfolio_panel.png" 
     width="450" alt="Portfolio Panel">  
**Portfolio Panel**  
_See the aggregation and total value of transactions. Return to the Trade panel for further trades on portfolio holdings._  

--------

## Installation
1. `git clone [this repo]`
2. `cd client`
3. `npm install`
4. `npm start`
5. open a browswer to `http://localhost:3000`

## To Do 
- Add a Transactions Panel
- Add more details to Portfolio Panel
- Add tests!

## License: 
MIT
