import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DarkModeContext from "./DarkModeContext";


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
        <div>
        </div>
      </div>
    </div>
  );
}

export default Landing;