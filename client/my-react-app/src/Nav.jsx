import './App.css';
import Landing from './Landing.jsx';
import SignUpPage from './SignUpPage.jsx';
import Nav from './Nav.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default Nav
