import { useState } from "react";
import "../App.css";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log(1);
    let errors = "";

    if (!formData.email.includes("@")) {
      console.log("@");
      errors += "Email must include @. ";
    }

    if (formData.password.length < 6) {
      errors += "Password must be at least 6 characters.";
    }

    setErrorMsg(errors);

    e.preventDefault();
    setHasSubmitted(true);

    if (!errors) {
      // Login logic
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="component">
      <form className="form-box" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required
          autoComplete="off"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          required
          autoComplete="off"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="submit-button" type="submit">
          Submit
        </button>

        {hasSubmitted && errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  );
}

export default Form;
