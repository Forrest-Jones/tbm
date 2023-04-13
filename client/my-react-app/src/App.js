import React, { useState } from "react";
import Landing from "./Landing.jsx";
import SignUpPage from "./SignUpPage.jsx";
import Nav from "./Nav.jsx";
import UserDashboard from "./UserDashboard.jsx";
import LearnMore from "./LearnMore.jsx";
import Donatenow from "./Donatenow.jsx";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Organizations from "./Organizations.jsx";
import DarkModeContext from "./DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/dashboard" render={(props) => <UserDashboard user={props.location.state} />} />
            <Route path="/organizations/:id/learnmore" component={LearnMore} />
            <Route path="/organizations/:id/donatenow" component={Donatenow} />
            <Route path="/donatenow" component={Donatenow} /> {/* Add this new route */}
            <Route path="/about" component={About} />
            <Route path="/organizations" component={Organizations} />
          </Switch>
        </div>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
