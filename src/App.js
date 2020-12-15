import React from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Home" component={Home} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
