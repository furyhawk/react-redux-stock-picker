import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import DateSliderContainer from './DateSliderContainer';


export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color={this.props.color} light>
          <NavbarBrand href="/" className="mr-auto">
            <h3>Time Traveling Stock Picker</h3>
          </NavbarBrand>
          <DateSliderContainer />
        </Navbar>
      </div>
    );
  }
}