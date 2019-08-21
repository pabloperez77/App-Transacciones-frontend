import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from "./Home/index";
import Navigation from "./NavBar";
import CreateTable from "./CreateTable";
import CreateUser from "./CreateUser";
import Error404 from "./404/index";

import Footer from "./footer";

const AppRouter = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/404" component={Error404} exact />
        <Route path="/edit/:id" component={CreateTable} />
        <Route path="/create" component={CreateTable} />
        <Route path="/user" component={CreateUser} />
        <Redirect path="*" to={"/404"} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
