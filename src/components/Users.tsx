import { useState } from "react";
import "../App.css";

function Users() {
  const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
  ];

  const [isActive, setIsActive] = useState(false);

  const handleList = () => {
    return isActive === true
      ? users.filter((user) => user.active === true)
      : users;
  };

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="component">
      <div>
        <span>Show active users </span>
        <input type="checkbox" aria-label="checkbox" onClick={handleActive} />
      </div>

      {handleList().map((user) => (
        <p className="card" key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}

export default Users;
