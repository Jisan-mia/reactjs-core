import { useEffect, useState } from "react"

const TimerFuncComp = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date())

  const [text, setText] = useState('')

  useEffect(() => {
    console.log('updating title')
    document.title = `Clicked ${count} times`
  }, [count])


  useEffect(() => {
    console.log('set timer')
    const interval = setInterval(tick, 1000)

    // do the cleanup - stop the timer
    return () => {
      console.log('component unmounted')
      clearInterval(interval)
    }
  }, [])

  const tick = () => {
    console.log('clock ticking');
    setTime(new Date())
  }


  return (
    <div>
      <p><input type="text"  value={text} onChange={(e) => setText(e.target.value)}/></p>
      <p>Time: {time.toLocaleTimeString()}</p>
      <p><button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>Click Me</button></p>
    </div>
  )
}

export default TimerFuncComp