import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { Header, Footer } from "./layouts/index.js";
import Home from "./Home";
import CreateTable from "./CreateTable";
import CreateUser from "./CreateUser/index";
import Error404 from "./404";

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={CreateTable} />
          <Route path="/user" exact component={CreateUser} />
          <Route path="/404" exact component={Error404} />
          <Redirect path="*" to={"/404"} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
