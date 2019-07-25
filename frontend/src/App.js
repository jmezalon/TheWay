import React from "react";
import axios from "axios";
import { Route, Switch, withRouter, Link } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import ChurchPage from "./components/churches/ChurchPage";
import MemberPage from "./components/members/MemberPage";

import "./App.css";

class App extends React.Component {
  state = {
    allChurches: []
  };
  render() {
    return (
      <div className="App">
        <Route component={Navbar} />
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route
            exact
            path="/local-church/:id"
            render={props => <ChurchPage {...props} />}
          />
          <Route
            exact
            path="/local-member/:id"
            render={props => <MemberPage {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
