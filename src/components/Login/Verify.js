import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Session from "../../utility/stringConstants/session";

class Verify extends Component {
  state = {
    otp: ""
  };

  handleChange = event => {
    this.setState({ otp: event.target.value });
  };
  handleSubmit = event => {
    let username;
    if (sessionStorage.getItem(Session.USERNAME)) {
      username = sessionStorage.getItem(Session.USERNAME);
    }
    event.preventDefault();
    event.stopPropagation();
    Auth.confirmSignUp(username, this.state.otp)
      .then(res => {
        console.log("otp verified", res);
        this.props.history.push("home");
      })
      .catch(err => {
        console.log("verify err", err);
      });
  };
  render() {
    const { otp } = this.state;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="OTP">Enter OTP to Verify Email</label>
            <input type="password" value={otp} onChange={this.handleChange} />
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

export default Verify;
