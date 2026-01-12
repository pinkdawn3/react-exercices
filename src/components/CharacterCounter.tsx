import { useState } from "react";
import "../App.css";

function CharacterCounter() {
  const MAX_LENGTH = 100;
  const WARNING_LENGTH = 80;

  const [text, setText] = useState("");
  const colourClass = text.length >= WARNING_LENGTH ? "count-limit" : "count";

  const handleAreaChange = (e) => {
    const value = e.target.value;

    console.log(value.length);

    if (value.length <= MAX_LENGTH) {
      setText(value);
    }
  };

  return (
    <div className="component">
      <textarea
        aria-label="text input"
        value={text}
        onChange={handleAreaChange}
      ></textarea>
      <div className={colourClass}>
        <span>{text.length}</span>
        <span>/{MAX_LENGTH}</span>
      </div>
    </div>
  );
}

export default CharacterCounter;
