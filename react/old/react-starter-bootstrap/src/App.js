import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DebugComponent from './components/DebugComponent';
import TestComponent from './components/TestComponent';

function Index() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/test/">Test</Link>
                </li>
                <li>
                  <Link to="/debug/">Debug</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/test/" component={TestComponent} />
      <Route path="/debug/" component={DebugComponent} />
      <Route path="/users/" component={Users} />

      </div>
    </Router>
  );
}

export default App;
