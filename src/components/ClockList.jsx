import Clock from "./Clock"

const ClockList = (props) => {
  const {lists} = props
  return (
    <div>
      {lists.map(clock => <Clock key={clock} />)}
    </div>
  )
}

export default ClockList