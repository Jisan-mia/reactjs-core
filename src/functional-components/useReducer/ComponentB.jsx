import React, { useContext } from 'react'
import { MyCountContext } from './ReducerWithContext'

const ComponentB = () => {
  const {counterDispatch} = useContext(MyCountContext)
  return (
    <div>
      <button onClick={() => counterDispatch('increment')}>Increment</button>
      <button onClick={() => counterDispatch('decrement')}>Decrement</button>
    </div>
  )
}

export default ComponentB