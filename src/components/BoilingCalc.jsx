import React from 'react';
import { temperatureConverter, toCelsius, toFahrenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class BoilingCalc extends React.Component {

  state = {
    temperature: '',
    scale: 'c'
  }

  handleTemperatureChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale
    })
  }

  render() {
    const {temperature, scale} = this.state

    const celsius = scale === 'f' ? temperatureConverter(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? temperatureConverter(temperature, toFahrenheit) : temperature;


    return (
      <>
        <TemperatureInput scale='c' value={celsius} onChange={this.handleTemperatureChange}/>
        <br />
        <TemperatureInput scale='f' value={fahrenheit} onChange={this.handleTemperatureChange}/>
        <BoilingVerdict celsius={celsius} />
      </>
    )
  }
}