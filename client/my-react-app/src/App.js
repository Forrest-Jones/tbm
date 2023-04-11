import React from 'react';
import Landing from './Landing.jsx';
import SignUpPage from './SignUpPage.jsx';
import Nav from './Nav.jsx';
import UserDashboard from './UserDashboard.jsx';
import LearnMore from './LearnMore.jsx';
import Donatenow from './Donatenow.jsx'; // Import the Donatenow component
import About from './About'; // Import the About component
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Organizations from './Organizations.jsx';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/dashboard" render={(props) => <UserDashboard user={props.location.state} />} />
          <Route path="/learnmore" component={LearnMore} />
          <Route path="/donatenow" component={Donatenow} /> {/* Add the Donatenow route */}
          <Route path="/about" component={About} /> {/* Add the About route */}
          <Route path="/organizations" component={Organizations} /> {/* Add the Organizations route */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;
