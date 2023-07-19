import React from 'React'

export default class MyCounter extends React.Component {
  state = {
    count: 0
  }

  handleIncrementCount = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))

  }

  render() {
    const {count} = this.state
    const {render} = this.props
    return render(count, this.handleIncrementCount)
  }
}