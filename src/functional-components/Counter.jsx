import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  let i = 0
  const handleAdd5 = () => {
    while(i < 5) {
      setCount((prevCount) => prevCount+1)
      i++
    }
  }
  return (
    <div>
      {count}
      <p><button type="button" onClick={() => setCount((prevValue) => prevValue +1)}>Add 1</button></p>


      <div>
        <p><button type="button" onClick={handleAdd5}>Add 5</button></p>
      </div>
    </div>
  )
}

export default Counter