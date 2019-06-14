import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Session from "../../utility/stringConstants/session";

class ForgotPasswordSubmit extends Component {
  state = {
    code: "",
    password: ""
  };
  handleCode = event => {
    this.setState({ code: event.currentTarget.value });
  };
  handlePassword = event => {
    this.setState({ password: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let username;
    if (sessionStorage.getItem(Session.USERNAME)) {
      username = sessionStorage.getItem(Session.USERNAME);
    }
    const { code, password } = this.state;
    event.preventDefault();
    Auth.forgotPasswordSubmit(username, code, password)
      .then(data => console.log("forgot submit data", data))
      .catch(err => console.log("forgot submit err", err));
  };

  render() {
    const { code, password } = this.state;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="code">Enter Code to Reset Password</label>
            <input
              id="code"
              type="password"
              value={code}
              onChange={this.handleCode}
            />
          </div>
          <div>
            <label htmlFor="password">Enter the New Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={this.handlePassword}
            />
          </div>
          <div>
            <button type="submit" onClick={this.handleSubmit}>
              Validate
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgotPasswordSubmit;
