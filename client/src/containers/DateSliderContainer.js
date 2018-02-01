import React, { Component } from 'react';
import {connect} from 'react-redux';
import Slider from 'react-rangeslider';
import {setSelectedDate} from '../actions/DateActions';

const {DEFAULT_LATEST_DATE, dateSliderArray} = require('../helpers/helpers');

const mapStateToProps = (state) => {
  return {
    date: state.date,
    stocks: state.stocks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedDate: (date) => {
      console.log("dispatch(setSelectedDate(date))", date);
      dispatch(setSelectedDate(date));
    },
  };
};

class DateSliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: DEFAULT_LATEST_DATE
    };
  }
  componentDidMount(){
    this.setState({current: this.props.date.current});
  }
  onChange = (sliderVal) => this.setState({current: dateSliderArray[sliderVal]});
  onChangeComplete = () => {
    let {current} = this.state;
    console.log("onChangeComplete", current);
    this.props.setSelectedDate(current);
    };
  format = (sliderVal) => dateSliderArray[sliderVal];
  render() {
    
    let current = this.state.current;
    console.log("current", this.props.date.current, "index", dateSliderArray.indexOf(current));
    return (
      <div>
        <Slider
          min={0}
          max={dateSliderArray.length-1}
          step={1}
          value={dateSliderArray.indexOf(current)}
          format={this.format}
          onChange={this.onChange}
          onChangeComplete={this.onChangeComplete}
        />
        <div>Selected Date: {current}</div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DateSliderContainer);