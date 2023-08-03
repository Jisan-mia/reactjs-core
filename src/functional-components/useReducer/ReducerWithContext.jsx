import React, { useReducer } from 'react';
import ComponentA from './ComponentA';

export const MyCountContext = React.createContext();

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


const ReducerWithContext = () => {
  const [count, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      <p>Counter value - {count}</p>
      <MyCountContext.Provider value={{counterDispatch: dispatch}}>
        <ComponentA />
      </MyCountContext.Provider>
    </div>
  )
}

export default ReducerWithContext