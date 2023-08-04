import useWindowWidth from '../hooks/useWindowWidth';

const WindowSize = () => {
  const windowSize = useWindowWidth()

  return (
    <div>
      <h2>Your window size is {windowSize}</h2>
      <h3>You are on {windowSize < 768 ? 'small' : 'large'} screen</h3>
    </div>
  )
}

export default WindowSize