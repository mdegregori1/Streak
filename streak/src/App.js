import React from 'react';
import './App.css';

import { Route } from "react-router-dom";

import LandingPage from "./components/LandingPage"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"



function App() {
  return (
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route path='/Login' component={Login} />
      <Route path='/Register' component={Register} />
      <Route path='/Dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
