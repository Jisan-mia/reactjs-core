
export default function MyClickCounter(props) {
  const {count, handleIncrementCount} = props
    return (
      <button onClick={handleIncrementCount}> 
        Click {count} times
      </button>
    )
}
