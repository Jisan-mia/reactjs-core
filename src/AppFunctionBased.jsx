import { useState } from "react"
import WindowSize from "./functional-components/WindowSize"
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
      {/* <GetTodos /> */}
      <WindowSize />
    </>
  )
}

export default AppFunctionBased