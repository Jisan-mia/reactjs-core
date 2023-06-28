import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        date: new Date(),
      })
    }, 1000) 
  }

  render() {
    return (
      <h1 className="header">
        <span className="timer">
          Current Time: {this.state.date.toLocaleTimeString(this.props.local)}
        </span>
      </h1>
    );
  }
}

export default Clock;