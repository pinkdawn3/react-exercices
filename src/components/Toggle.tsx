import { useState } from "react";
import "../App.css";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prev) => !prev);
  };

  const labelColor = isOn ? "green" : "red";

  return (
    <>
      <button onClick={toggle} aria-label="Toggle state">
        Toggle
      </button>

      <p className={`${labelColor}-label`}>I'm {labelColor}</p>
    </>
  );
}

export default Toggle;
