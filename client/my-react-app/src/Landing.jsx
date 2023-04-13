import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DarkModeContext from "./DarkModeContext";
import './globalStyles.css';

function Landing({ user, setUser, organizations }) {
  const history = useHistory();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`homepage${darkMode ? " dark" : ""}`}>
      <header className={`header${darkMode ? " dark" : ""}`}>
      </header>
      <div className={`content${darkMode ? " dark" : ""}`}>
        <div className="text-container">
          <h1 className={`title${darkMode ? " dark" : ""}`}>The Blessing Machine</h1>
          <p className={`description${darkMode ? " dark" : ""}`}>
            Transforming Fundraising for Christian Organizations.
          </p>
        </div>
        <div className="image">
          <div className="glass-pane">
            <img src="images/Jesus-image.jpg" alt="Jesus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;