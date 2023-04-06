import './App.css';
import Landing from './Landing.jsx';
import SignUpPage from './SignUpPage.jsx';
import Nav from './Nav.jsx';
import UserDashboard from './UserDashboard.jsx';
import LearnMore from './LearnMore.jsx'; // import the LearnMore component
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

        </Switch>
      </div>
    </Router>
  );
}

export default App;
