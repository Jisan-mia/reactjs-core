- JSX is syntactic sugar for creating React element
- we cannot change react element
- react elements are valid javascript expression
- react component returns react element
- one react component returns one single react
- we can reuse react component
- component receive properties from outside
- babel will transpile this to valid javascript
- react automatically calls render method of class component
- react component will re-render whenever props change
- state in class component is simply react object

- what is state?

  - state is nothing but a memory of a component
  - when a component is live, all variables/state are also live
  - whenever we changes page x to y, every variables/states of x lost

- componentDidMount() runs after component has rendered to the DOM
- componentWillUnmount() runs just before unmounting the component from the DOM
- A higher order component is a function that takes a component as a parameter and returns a new component
- render props is a props that defines render logic

- steps of using React Context API

  1. Create Context (React.createContext()), this gives us 2 component Context.Provider and Context.Consumer
  2. Wrap parent with context provider (Context.Provider)
  3. provide a value of the context as prop (<Context.Provider value={{count: 1}} />)
  4. Wrap child with context consumer (Context.Consumer)
  5. Consumer follows the render prop pattern (<Context.Consumer> {({count}) => <ClickCounter count={count} /> } </Context.Consumer>)

- core responsibilities or React - Render/rerender ui & react to user input/actions
  - render jsx codes
  - manage states and props
  - react to events/inputs
  - evaluating state/props change
- anything other than react core responsibilities is react side effects. examples:
  - fetching data from an api
  - updating the dom
  - setting any subscriptions or timer
- problems with lifecycle methods of class component
  - repeating code
  - unorganized code
- useEffect

  - helps us perform side effects in functional component
  - solves all problems of lifecycle methods in class component
  - replaces componentDidMount(), componentDidUpdate() & componentWillUnmount()

- useCallback & useMemo helps to optimize performance of react

  - useCallback hook memoizes the callback function or the reference of the function, only forget previous function and rememoizes if dependency input is changed
  - useMemo hook memoizes the return value of the callback function not the function itself just return value, and rememoizes if one of the dependency input is changed

- useReducer hook
  - this hook is an alternative of useState() hook
  - useState() has was created based on useReducer() hook
  - useReducer() hooks takes 2 parameter one is a reducer function, second is initial value
  - and useReducer() hook returns an array/tuple with stateValue and a dispatch function
  - with dispatch function we pass the action type/name, and based on the action name reducer updates respective states and render happens in react component

```javascript
useReducer(reducer, initialState)
newState = reducer(currentState, action)
returns a array/tuple = [newState, dispatch]
```
