import { useState } from "react";
import "../App.css";

function Toggle() {
  const [isRed, setIsRed] = useState(false);
  const [labelColour, setLabelColour] = useState("white");

  const toggleColor = () => {
    setIsRed(!isRed);

    if (isRed === true) {
      setLabelColour("green");
    } else {
      setLabelColour("red");
    }
  };

  return (
    <>
      <button onClick={toggleColor} aria-label="Change colour">
        Change colour
      </button>

      <p className={`${labelColour}-label`}>I'm {labelColour}</p>
    </>
  );
}

export default Toggle;
