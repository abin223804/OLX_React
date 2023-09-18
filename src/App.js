
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from './Pages/Login'

const App = () => (
  <div>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup"  component={Signup} />
      <Route path="/login"  component={Login} />
    </Router>
  </div>
);

export default App;
