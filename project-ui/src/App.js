import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Campaign from "./components/campaign-list.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import UsersList from "./components/user-list.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: [],
      
    };
  }
  render() {
    const { token } = this.state;

   

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/login"} className="navbar-brand">
            Home
          </Link>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                SignUp
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/campaign"} className="nav-link">
                Campaigns
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} /> */}
            <Route exact path={["/","/login", "/signup"]} component={SignUp} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/campaign" component={Campaign} />
            <Route exact path="/user" component={UsersList} />
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
