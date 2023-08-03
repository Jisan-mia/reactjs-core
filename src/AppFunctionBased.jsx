import { useState } from "react"
import ComplexCounter from "./functional-components/useReducer/ComplexCounter"
const AppFunctionBased = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      {/* <Todo />
      <hr />
      <Counter /> */}
      {/* <TimerClassComp /> */}
      {/* <p><button onClick={(() => setShow(prevState => !prevState))}>show/hide</button></p>
      {show ? (
        <TimerFuncComp />
      ) : 'nothing'} */}
      {/* <Users /> */}

      {/* <CounterHome /> */}
      {/* <MyForm /> */}
      {/* <UseReducerCounter /> */}
      <ComplexCounter />
    </>
  )
}

export default AppFunctionBased