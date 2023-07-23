import ReactDOM from 'react-dom/client';
import './index.css';

const states = [] // [0: [value, setter], 1: [value, setter]]
let stateIndex = -1;

const useState = (defaultValue) => {
  const index = ++stateIndex

  if(states[index]) return states[index];

  const setValue = (newValue) => {
    states[index][0] = newValue
    renderMe();
  }

  const returnArray = [defaultValue, setValue]
  states[index] = returnArray
  return returnArray
}



function App() {
  const [name, setName] = useState('')
  const [warning, setWarning] = useState(null)

  const handleChangeInput = (e) => {
    setName(e.target.value)
    const warnMsg = e.target.value.length > 8 ? 'first name could not be more than 8 char' : null
    setWarning(warnMsg)
  }

  return (
    <div>
      <p>{name}</p>
      <input type="text" value={name} onChange={handleChangeInput} placeholder='Enter First Name' />

      <h1>
        {warning || 'All good!'}
      </h1>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
function renderMe() {
  stateIndex = -1
  root.render(<App />)
}

renderMe()
