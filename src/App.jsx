import ClockList from './components/ClockList'
import Form from './components/Form'

function App() {
  const lists = [1]
  return (
    <div>
      <ClockList lists={lists} />
      <hr />
      <h1>React Forms</h1>
      <Form />


    </div>
  )
}

export default App
