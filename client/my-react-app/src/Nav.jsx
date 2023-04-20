import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import DarkModeContext from "./DarkModeContext";

import "./Nav.css";

function Nav({ hideButtons, isOnLandingPage }) {
  const history = useHistory();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add the loggedIn state and a toggle function
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  const navClassNames = `nav${isOnLandingPage ? " nav-on-landing-page" : ""}`;

  return (
    <nav className={navClassNames}>
      <ul className="nav-items">
        {!hideButtons && (
          <>
            <li>
              <Link to="/" onClick={() => history.push("/")}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => history.push("/about")}>About</Link>
            </li>
            <li>
              <Link to="/organizations" onClick={() => history.push("/organizations")}>Organizations</Link>
            </li>
            <li>
              <Link to="/endowmentmanagement" onClick={() => history.push("/endowmentmanagement")}>$Endowment Management$</Link>
            </li>
            <li>
              <Link to="/donatenow" onClick={() => history.push("/donatenow")}>Donate Now!</Link>
            </li>
            <li>
              {!loggedIn ? (
                <Link to="/organizations">
                  <button className="nav-login-button nav-button" onClick={toggleLogin}>
                    Login
                  </button>
                </Link>
              ) : (
                <button className="nav-login-button nav-button" onClick={toggleLogin}>
                  Logout
                </button>
              )}
            </li>
          </>
        )}
        <li>
          <button className={`nav-button dark-mode-button${darkMode ? " dark" : ""}`} onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
