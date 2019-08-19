import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import CreateTable from "./components/CreateTable";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/edit/:id" component={CreateTable} />
      <Route path="/create" component={CreateTable} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
