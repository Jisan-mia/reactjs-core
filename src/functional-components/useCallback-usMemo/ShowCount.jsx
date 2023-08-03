import React from 'react'

const ShowCount = ({title, count = 0}) => {
  console.log(`rendering ${title}`)
  return (
    <h3>
      {title} is {count}
    </h3>
  )
}

export default React.memo(ShowCount)