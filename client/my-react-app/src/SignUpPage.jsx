import React from "react";
import { useHistory } from "react-router-dom";
import UserDashboard from "./UserDashboard";

function SignUpPage() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submission here
    // ...
    // After successful submission, navigate to UserDashboard component
    history.push("/dashboard", { name: event.target.name.value, email: event.target.email.value });
  };

  return (
    <div>
      <h1>Sign Up Page</h1>
      <p>Please fill out the form below to sign up for our platform:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpPage;
