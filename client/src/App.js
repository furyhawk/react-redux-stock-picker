import React, { Component } from 'react';
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Slider from 'react-rangeslider';
import StocksTableContainer from './containers/StocksTableContainer';
import TradeContainer from './containers/TradeContainer';
import TransactionsContainer from './containers/TransactionsContainer';
import PortfolioContainer from './containers/PortfolioContainer';

const SelectAction = () => {
  return null;
};


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row show-border">
          <div className="col">
            <StocksTableContainer />
          </div>
          <div className="col">
            <div className="row show-border">
              <div className="col">
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={50}
                  orientation={"horizontal"}
                />        
              </div>
            </div>
            <div className="row show-border">
              <div className="col">
                <SelectAction />
                <Router>
                  <Switch>
                    <Route path='/trade' component={TradeContainer} />
                    <Route path='/transactions' component={TransactionsContainer} />
                    <Route path='/portfolio' component={PortfolioContainer} />
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
