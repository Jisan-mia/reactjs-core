import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default: 
      return state;
  }
} 


const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      <p>Count value - {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  )
}

export default UseReducerCounter