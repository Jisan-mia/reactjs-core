import React from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

export default class TemperatureInput extends React.Component {


  render() {
    const {scale, value, onChange} = this.props

    return (
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}</legend>
        <input type="text" value={value} onChange={(e) => onChange(parseFloat(e.target.value))}/>
      </fieldset>
    )
  }
}