import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));

  return (
    <div className="component">
      <h1>Counter</h1>
      <div className="card">
        <button
          onClick={decrement}
          disabled={count === 0}
          aria-label="Decrement counter"
        >
          -
        </button>

        <p>{count}</p>

        <button onClick={increment} aria-label="Increment counter">
          +
        </button>

        {count >= 10 && <p>El número es mayor o igual que 10</p>}
      </div>
    </div>
  );
}

export default Counter;
