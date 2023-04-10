import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Landing.css";

function Landing({ user, setUser, organizations }) {
  const history = useHistory();
  const [darkMode, setDarkMode] = useState(false);

  const handleSignUpClick = () => {
    history.push("/signup");
  };

  const handleLearnMoreClick = () => {
    history.push("/learnmore"); // Navigate to the Learn More page
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`homepage${darkMode ? " dark" : ""}`}>
      <h1 className={`title${darkMode ? " dark" : ""}`}>The Blessing Machine</h1>
      <p className={`description${darkMode ? " dark" : ""}`}>
        Transforming Fundraising for Christian Organizations.
        {/* Rest of the description */}
      </p>
      <div className="cta">
        <button className={`button${darkMode ? " dark" : ""}`} onClick={handleSignUpClick}>
          Sign Up
        </button>
        <button className={`button${darkMode ? " dark" : ""}`} onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>
      <button className={`button${darkMode ? " dark" : ""}`} onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="image">
        <img src="images/Jesus-image.jpg" alt="Jesus Image" />
      </div>
    </div>
  );
}

export default Landing;
