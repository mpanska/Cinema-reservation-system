import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";
import AuthService from "../services/authService";
import Register from "./Register";

const required = value => {
  if (!value) {
    return (
      <div className="error">
        This field is required.
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="login-form page">

        <h2>Log in to your account</h2>

        <Form onSubmit={this.handleLogin} ref={c => { this.form = c; }}>
            <div className="form-inputs">
                <Input type="text" className="form-input" name="username" placeholder="Username"
                    value={this.state.username} onChange={this.onChangeUsername} validations={[required]}
                />
                <Input type="password" className="form-input" name="password" placeholder="Password"
                    value={this.state.password} onChange={this.onChangePassword} validations={[required]}
                />

                <p>Don't have an account yet? <Link className="reg-link" to="/register">Register here</Link> </p>

                <button className="form-input login-btn" disabled={this.state.loading}> Log in </button>
            </div>

            {this.state.message && ( <div className="error" > {this.state.message} </div>)}
            <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c;}} />
        </Form>
      </div>
    );
  }
}