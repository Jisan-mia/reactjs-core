import { useState } from "react"
import TimerFuncComp from "./functional-components/TimerFuncComp"
const AppFunctionBased = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      {/* <Todo />
      <hr />
      <Counter /> */}
      {/* <TimerClassComp /> */}
      <p><button onClick={(() => setShow(prevState => !prevState))}>show/hide</button></p>
      {show ? (
        <TimerFuncComp />
      ) : 'nothing'}
      {/* <Users /> */}
    </>
  )
}

export default AppFunctionBased