import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import ChurchPage from "./components/churches/ChurchPage";
import MemberPage from "./components/members/MemberPage";

import "./App.css";

class App extends React.Component {
  state = {
    allChurches: []
  };

  getAllChurches = () => {
    axios
      .get("/churches")
      .then(res => {
        this.setState({
          allChurches: res.data.churches
        });
      })
      .catch(er => {
        console.log(er, "church error");
      });
  };
  componentDidMount() {
    this.getAllChurches();
  }
  render() {
    return (
      <div className="App">
        <Route component={Navbar} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <LandingPage {...props} allChurches={this.state.allChurches} />
            )}
          />
          <Route
            exact
            path="/local-church/:id"
            render={props => (
              <ChurchPage {...props} allChurches={this.state.allChurches} />
            )}
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
