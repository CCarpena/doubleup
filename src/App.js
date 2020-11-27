import logo from './logo.svg';
import './App.css';
import {Button, Nav, NavDropdown, FormControl,Form} from 'react-bootstrap';
import "bootswatch/dist/darkly/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home.js';
import Play from './play.js';
import Navbar from './navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/play' component={Play} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
