import React, { useReducer } from 'react';

const initialState = {
  counter: 0,
  counter2: 0,
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {...state, counter: state.counter + action.value}
    case 'decrement':
      return {...state, counter: state.counter - action.value};
    case 'increment2': 
      return {...state, counter2: state.counter2 + action.value}
    case 'decrement2': 
      return {...state, counter2: state.counter2 - action.value}
    default: 
      return state;
  }
} 

const ComplexCounter2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      <p>Count value = {count.counter}</p>
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment by 1</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement by 1</button>
      <hr />
      <p>Count2 value = {count.counter2}</p>
      <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment by 1</button>
      <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement by 1</button>
    </div>
  )
}

export default ComplexCounter2