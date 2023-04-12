import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUpPage.css";
import donateNowStyles from "./Donatenow.module.css";

function SignUpPage() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/dashboard", { name: event.target.name.value, email: event.target.email.value });
  };

  const handleHomePageClick = () => {
    history.push("/");
  };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="glass-pane">
      <header>
        <nav>
          <button onClick={handleHomePageClick}>Home</button>
          <div className="hamburger" onClick={handleHamburgerClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
        {isOpen && (
          <div className="glass-pane">
            <button onClick={handleHomePageClick}>Home</button>
          </div>
        )}
      </header>
      <div className="container">
        <h1>Sign Up Page</h1>
        <div className="form-wrapper">
          <p>Please fill out the form below to sign up for our platform:</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <button type="submit" className={donateNowStyles.submitBtn}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="blur-circle top-left"></div>
      <div className="blur-circle top-right"></div>
      <div className="blur-circle bottom-left"></div>
      <div className="blur-circle bottom-right"></div>
    </div>
  );
}

export default SignUpPage;
