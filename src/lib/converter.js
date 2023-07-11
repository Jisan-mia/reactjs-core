export function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9; 
}

export function toFahrenheit(celsius) {
  return (celsius * 9 /5) + 32;
}

export function temperatureConverter(temperature, converter){
  const input = parseFloat(temperature);

  if(Number.isNaN(input)) {
    return ''
  }

  const output = converter(input)
  const roundedOutput =  Math.round(output * 1000) / 1000;
  return roundedOutput.toString();
}