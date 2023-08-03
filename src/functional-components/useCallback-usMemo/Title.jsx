import React from 'react'

const Title = () => {
  console.log('rendering title...')
  return (
    <h1>useCallback and useMemo uses</h1>
  )
}

export default React.memo(Title)