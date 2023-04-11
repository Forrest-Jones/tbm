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
    history.push("/learnmore");
  };

  const handleAboutClick = () => {
    history.push("/about");
  };

  const handleOrganizationsClick = () => {
    history.push("/organizations");
  };

  const handleDonateNowClick = () => {
    history.push("/donatenow");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`homepage${darkMode ? " dark" : ""}`}>
      <header className={`header${darkMode ? " dark" : ""}`}>
        <nav>
          <button className={`button${darkMode ? " dark" : ""}`} onClick={handleAboutClick}>About</button>
          <button className={`button${darkMode ? " dark" : ""}`} onClick={handleOrganizationsClick}>Organizations</button>
          <button className={`button donate-button${darkMode ? " dark" : ""}`} onClick={handleDonateNowClick}>Donate Now Through GYVE App</button>
          <button className={`dark-mode-button${darkMode ? " dark" : ""}`} onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </header>
      <div className={`content${darkMode ? " dark" : ""}`}>
        <h1 className={`title${darkMode ? " dark" : ""}`}>The Blessing Machine</h1>
        <p className={`description${darkMode ? " dark" : ""}`}>
          Transforming Fundraising for Christian Organizations.
        </p>
        <div className="cta">
          <button className={`button${darkMode ? " dark" : ""}`} onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button className={`button${darkMode ? " dark" : ""}`} onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
        <div className="image">
          <img src="images/Jesus-image.jpg" alt="Jesus" />
        </div>
      </div>
    </div>
  );
}

export default Landing;