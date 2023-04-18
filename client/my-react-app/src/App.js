import React, { useState } from "react";
import Landing from "./Landing.jsx";
import UserDashboard from "./UserDashboard.jsx";
import LearnMore from "./LearnMore.jsx";
import Donatenow from "./Donatenow.jsx";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Organizations from "./Organizations.jsx";
import DarkModeContext from "./DarkModeContext";
import SignUpPage from "./SignUpPage.jsx";
import EndowmentManagement from "./EndowmentManagement.jsx";
import Nav from "./Nav.jsx";



function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <div>
          <Nav />
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/dashboard" render={(props) => <UserDashboard user={props.location.state} />} />
              <Route path="/organizations/:id/learnmore" component={LearnMore} />
              <Route path="/organizations/:id/donatenow" component={Donatenow} />
              <Route path="/donatenow" component={Donatenow} />
              <Route path="/about" component={About} />
              <Route path="/organizations" component={Organizations} />
              <Route path="/endowmentmanagement" component={EndowmentManagement} />
            </Switch>
          </div>
        </div>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;


