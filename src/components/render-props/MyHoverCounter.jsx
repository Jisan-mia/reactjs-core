import { Component } from 'react'

export default class MyHoverCounter extends Component {

  render() {
    const {count, handleIncrementCount} = this.props
    return (
      <h1 onMouseOver={handleIncrementCount}>
        Hovered {count} times
      </h1>
    )
  }
}
