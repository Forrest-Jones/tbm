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
        <div>
        </div>
      </div>
    </div>
  );
}

export default Landing;