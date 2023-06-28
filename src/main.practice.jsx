
import React from "react";
import ReactDOM from "react-dom";

// function Clock() {
//   return (
//     <h1 className='header'>
//       <span className="timer">
//         Current Time: {new Date().toLocaleTimeString()}
//       </span>
//     </h1>
//   )
// }

class Clock extends React.Component {
  render() {
    return (
      <h1 className="header">
        <span className="timer">
          Current Time: {new Date().toLocaleTimeString(this.props.local)}
        </span>
      </h1>
    );
  }
}


ReactDOM.render(<Clock local='bn-BD' />, document.getElementById("root"));
