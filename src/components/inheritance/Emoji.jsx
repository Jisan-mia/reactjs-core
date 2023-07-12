import React from 'react'

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`

  render(override) {
    let text = 'this is simple text'
    if(override) text = override
    return <h2>{text}</h2>
  }
}