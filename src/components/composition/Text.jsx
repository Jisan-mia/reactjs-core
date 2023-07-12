export default function Text({ addEmoji, addBracket }) {
  let text = "I'm JavaScript";
  if (addEmoji) {
    text = addEmoji(text, "💜");
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <h3>{text}</h3>;
}
