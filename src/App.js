import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
    </Router>
  );
}

export default App;
