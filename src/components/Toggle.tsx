import { useState } from "react";

function Toggle() {
  const [isRed, setIsRed] = useState(false);
  const toggleColor = () => {};

  return (
    <>
      <button onClick={toggleColor} aria-label="Change colour">
        Change colour
      </button>

      <p color="red">I'm one colour</p>
    </>
  );
}

export default Toggle;
