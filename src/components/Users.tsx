import { useState } from "react";
import "../App.css";

function Users() {
  const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
  ];

  const [isActive, setIsActive] = useState(false);

  const filteredUsers = isActive ? users.filter((user) => user.active) : users;

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="component">
      <div>
        <span>Show active users </span>
        <input
          type="checkbox"
          aria-label="checkbox"
          checked={isActive}
          onChange={handleActive}
        />
      </div>

      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        filteredUsers.map((user) => (
          <p className="card" key={user.id}>
            {user.name}
          </p>
        ))
      )}
    </div>
  );
}

export default Users;
