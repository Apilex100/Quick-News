import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=4;
  render() {
    return (
      <Router>
          <Navbar />
          {/* <News  category="health" /> */}
          <Switch>
            <Route exact path="/">
              <News key="general" category="general" country="in" pageSize={this.pageSize} />
            </Route>
            <Route exact path="/Business">
              <News key="business" category="business" country="in" pageSize={this.pageSize}/>
            </Route>
            <Route exact path="/Entertainment">
              <News key="entertainment" category="entertainment" country="in" pageSize={this.pageSize}/>
            </Route>
            <Route exact path="/Health">
              <News key="health" category="health" country="in" pageSize={this.pageSize}/>
            </Route>
            <Route exact path="/Science">
              <News key="science" category="science" country="in" pageSize={this.pageSize}/>
            </Route>
            <Route exact path="/Sports">
              <News key="sports" category="sports" country="in" pageSize={this.pageSize}/>
            </Route>
            <Route exact path="/Technology">
              <News key="technology" category="technology" country="in" pageSize={this.pageSize}/> 
            </Route>
          </Switch>
      </Router>
    );
  }
}
