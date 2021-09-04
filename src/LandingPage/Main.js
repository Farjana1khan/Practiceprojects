import React from "react";
/////import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Getqubi from "./Getqubi";
import Contact from "./Contact";

import Navbar from "./Navbar";
//import "./index.css";
import { Switch, Route, Redirect } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route exact path="/products" component={Products} />
        <Route exact path="/getqubi" component={Getqubi} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default Main;
