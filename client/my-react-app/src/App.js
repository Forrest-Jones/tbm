import './App.css';
import Landing from './Landing.jsx';
import SignUp from './SignUp.jsx';
import SignUpPage from './SignUpPage.jsx';
import Nav from './Nav.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Landing />
      <SignUp />
    </div>
  );
}


export default App;



