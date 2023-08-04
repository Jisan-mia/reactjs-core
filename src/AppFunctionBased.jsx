import { useState } from "react"
import GetTodos from "./functional-components/useReducer/GetTodos"
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
      {/* <ReducerWithContext /> */}
      <GetTodos />
    </>
  )
}

export default AppFunctionBased