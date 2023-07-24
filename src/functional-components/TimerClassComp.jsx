import React from 'react';

export default class TimerClassComp extends React.Component {
  state= {
    count: 0,
    time: new Date()
  }

  componentDidMount() {
    const {count} = this.state;
    document.title = `Clicked ${count} times`
    this.timerInterval = setInterval(this.tick, 1000)
  }

  componentDidUpdate() {
    const {count} = this.state;
    document.title = `Clicked ${count} times`
  }
  
  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }


  handleClick = () => {
    this.setState(({count}) => ({
      count: count + 1
    }))
  }

  tick = () => {
    this.setState({
      time: new Date()
    })
  }
  render() {
    const {time} = this.state
    return (
      <div>
        <p>Timer: {time.toLocaleTimeString()}</p>

        <p><button type="button" onClick={this.handleClick}>Click</button></p>
      </div>
    )
  }
}