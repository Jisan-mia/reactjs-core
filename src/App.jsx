import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter(counter+1)}>Count - {counter}</button>
    </div>
  )
}

export default App
