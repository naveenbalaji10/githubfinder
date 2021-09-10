import React from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Home from "../src/components/pages/Home";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
