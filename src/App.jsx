import { useState } from 'react'
import Clock from './components/Clock'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Clock local="en-US" />
    </div>
  )
}

export default App
