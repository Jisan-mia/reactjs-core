import React, { useEffect, useRef, useState } from 'react'

const MyTimer = () => {
  const [time, setTime] = useState(new Date())
  const buttonIntervalRef = useRef(null)

  const tick = () => {
    setTime(new Date())
  }

  useEffect(() => {
    buttonIntervalRef.current = setInterval(tick, 1000)

    return () => {
      clearInterval(buttonIntervalRef.current)
    }
  }, [])

  return (
    <div>
      <h3>My Timer</h3>
      <p>
        {time.toLocaleTimeString()}
      </p>

      <button onClick={() => clearInterval(buttonIntervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default MyTimer