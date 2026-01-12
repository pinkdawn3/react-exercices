import { useState } from "react";
import "../App.css";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    setErrorMsg("");
    let returnValue = true;
    if (!formData.email.includes("@")) {
      setErrorMsg("The email format is not correct, lacks @.");
      returnValue = false;
    }

    if (formData.password.length < 6) {
      setErrorMsg(
        (prevState) =>
          prevState + "Password must contain at least 6 characters."
      );
      returnValue = false;
    }

    if (returnValue === true) {
      // Login logic
    }

    return returnValue;
  };

  return (
    <>
      <div className="form-box">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          aria-label="Email box"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          aria-label="Password box"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Sign In
        </button>

        <p>{errorMsg}</p>
      </div>
    </>
  );
}

export default Form;
