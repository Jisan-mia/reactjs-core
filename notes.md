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
