
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

const App = () => (
  <div>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
    </Router>
  </div>
);

export default App;
