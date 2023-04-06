import React from "react";

function SignUp() {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <p>Please fill out the form below to sign up for our platform:</p>
      <form>
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

export default SignUp;
