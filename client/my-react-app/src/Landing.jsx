import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DarkModeContext from "./DarkModeContext";
import "./Landing.css";

function Landing({ user, setUser, organizations }) {
  const history = useHistory();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`homepage${darkMode ? " dark" : ""}`}>
      <div className={`content${darkMode ? " dark" : ""}`}>
        <div className={`text-container glass-pane`}>
          <div className={`centered-text${darkMode ? " dark" : ""}`}>
            <h1 className={`title${darkMode ? " dark" : ""}`}>The Blessing Machine</h1>
          </div>
          <div className={`text-block`}>
            <p className={`description${darkMode ? " dark" : ""}`}>
              Transforming Fundraising for Christian Organizations.
              The Blessing Machine is set to revolutionize the fundraising 
              landscape for Christian organizations by leveraging 
              cutting-edge technologies and providing a tailored solution. 
              This platform will simplify the donation process, 
              improve endowment management, and maximize donor contributions. 
              The Blessing Machine will empower Christian organizations 
              to achieve their missions, secure their financial future, 
              and create lasting, positive change in their communities for Jesus Christ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
