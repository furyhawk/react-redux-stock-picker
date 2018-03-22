import React, { Component } from 'react';
import {
  NavLink as RRNavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {NavItem, NavLink} from 'reactstrap';
import DateSliderContainer from './containers/DateSliderContainer';
import StocksTableContainer from './containers/StocksTableContainer';
import TradeContainer from './containers/TradeContainer';
import TransactionsContainer from './containers/TransactionsContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import SelectAction from './components/SelectAction';
// import {navs} from './helpers/helpers';

// const selectActionNavs = Object.keys(navs).map((navKey, i) => (
//   <NavItem key={i}>
//     <NavLink tag={RRNavLink} to={navs[navKey]}>{navKey}}</NavLink>
//   </NavItem>
// ));

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <div className="row show-border">
            <div className="col-4">
            <div className="col-12 show-border">
              <StocksTableContainer />
            </div>
            </div>
            <div className="col-8">
            <div className="col-12">
              <div className="row show-border">
                <div className="col">
                  <DateSliderContainer />    
                </div>
              </div>
              <div className="row show-border">
                <div className="col">
                    <div>
                      <SelectAction  />
                      <Switch>
                        <Route path='/trade/:ticker?' component={TradeContainer} />
                        <Route path='/transactions' component={TransactionsContainer} />
                        <Route path='/portfolio' component={PortfolioContainer} />
                      </Switch>
                    </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
