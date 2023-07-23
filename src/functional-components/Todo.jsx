import { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [warning, setWarning] = useState(null);

  const handleChangeInput = (e) => {
    setName(e.target.value);
    const warnMsg =
      e.target.value.length > 8
        ? "first name could not be more than 8 char"
        : null;
    setWarning(warnMsg);
  };

  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        value={name}
        onChange={handleChangeInput}
        placeholder="Enter First Name"
      />
      <h1>{warning || "All good!"}</h1>
    </div>
  );
}

export default Todo;
