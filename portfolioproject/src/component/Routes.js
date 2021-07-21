import Home from "/Home";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from '/Contacts';
import About from '/About'; 

export default function Routes() {
  return (
    <Switch>
        <Route path="/" component={Home}/>
        <Route path="/about" componenet={About}/>
        <Route path="/contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
  );
}