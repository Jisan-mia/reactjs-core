const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput({ scale, value, onChange }) {
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleNames[scale]}</legend>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e, scale)}
      />
    </fieldset>
  );
}
