import React, { Component } from "react";
import AuthService from "../services/authService";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  logOut() { 
    this.props.history.push("/");
    AuthService.logout()
    window.location.reload();
  }

  render() {
    const { currentUser } = this.state;



    return (
      <div className="page">
          <h3>{currentUser.username} </h3>
          <button onClick={this.logOut}>Log out</button>
      </div>
    );
  }
}