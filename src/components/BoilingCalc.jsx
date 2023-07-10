import React from 'react';
import TemperatureInput from './TemperatureInput';

export default class BoilingCalc extends React.Component {

  state = {
    celsiusValue: '',
    fahrenheitValue: ''
  }

  handleCelsiusChange = (value) => {
    if(!value) {
      this.setDefaultState();
      return;
    }
    this.setState({
      celsiusValue: value,
      fahrenheitValue: (value * 1.8) + 32
    })
  }

  handleFahrenHeitValue = (value) => {
    if(!value) {
      this.setDefaultState();
      return;
    }
    this.setState({
      fahrenheitValue: value,
      celsiusValue: (5/9) * (value - 32)
    })
  }

  setDefaultState = () => {
    this.setState({
      celsiusValue: '',
      fahrenheitValue: ''
    })
  }

  render() {
    const {celsiusValue, fahrenheitValue} = this.state
    return (
      <>
        <TemperatureInput scale='c' value={celsiusValue} onChange={this.handleCelsiusChange}/>
        <br />
        <TemperatureInput scale='f' value={fahrenheitValue} onChange={this.handleFahrenHeitValue}/>
        {/* <BoilingVerdict celsius={temperature} /> */}
      </>
    )
  }
}