import { useState } from "react"
import ReducerWithContext from "./functional-components/useReducer/ReducerWithContext"
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
      {/* <ComplexCounter1 /> */}
      {/* <ComplexCounter2 /> */}
      {/* <ComplexCounter3 /> */}
      <ReducerWithContext />
    </>
  )
}

export default AppFunctionBased