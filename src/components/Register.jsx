import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/authService";

const required = value => {
  if (!value) {
    return (
      <div className="error">
        This field is required.
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="error">
        Email is not correct.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="error">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="error">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }



  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
          this.props.history.push("/log-in");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="login-form page">
        <h2>Register new account</h2>
        <Form onSubmit={this.handleRegister} ref={c => { this.form = c;}}>
          {!this.state.successful && (
            <div>
              <Input type="text" className="form-input" name="username"
                value={this.state.username} onChange={this.onChangeUsername}
                validations={[required, vusername]} placeholder="Username"
              />
              
              <Input type="text" className="form-input" name="email"
                value={this.state.email} onChange={this.onChangeEmail}
                validations={[required, email]} placeholder="Email"
              />
              
              <Input type="password" className="form-input" name="password" value={this.state.password}
                onChange={this.onChangePassword} validations={[required, vpassword]} placeholder="Password"
              />
           
              <button className="form-input login-btn">Register</button>
               
              </div>
            )}

            {this.state.message && (
              <div className={ this.state.successful ? "success" : "error" }>
                {this.state.message}
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c; }}/>
          </Form>
        </div>
    );
  }
}