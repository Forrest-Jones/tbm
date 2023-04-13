import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import DarkModeContext from "./DarkModeContext";
import "./Nav.css";
import './globalStyles.css';

function Nav({ hideButtons }) {
  const history = useHistory();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav>
      <ul>
        {!hideButtons && (
          <>
            <li>
              <Link to="/" onClick={() => history.push("/")}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => history.push("/about")}>About The Blessing Machine</Link>
            </li>
            <li>
              <Link to="/organizations" onClick={() => history.push("/organizations")}>Organizations</Link>
            </li>
            <li>
              <Link to="/donatenow" onClick={() => history.push("/donatenow")}>Donate Now the via BlessingMachine App</Link>
            </li>
            <li>
              <Link to="/signup" onClick={() => history.push("/signup")}>Sign Up</Link>
            </li>
              </>
        )}
        <li>
          <button className={`dark-mode-button${darkMode ? " dark" : ""}`} onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
