import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    // ... potentially many more individual properties
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="form-box">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          aria-label="lorem ipsum"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          aria-label="lorem ipsum"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          aria-label="lorem ipsum"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          aria-label="lorem ipsum"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Form;
