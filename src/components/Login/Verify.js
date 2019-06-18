import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Session from "../../utility/stringConstants/session";
import Routes from "../../utility/stringConstants/routes";

class Verify extends Component {
  state = {
    otp: "",
    username: "",
    loading: ""
  };
  componentDidMount = () => {
    if (sessionStorage.getItem(Session.USERNAME)) {
      let username = sessionStorage.getItem(Session.USERNAME);
      this.setState({ username });
    }
  };

  handleChange = event => {
    this.setState({ otp: event.target.value });
  };
  handleSubmit = event => {
    this.setState({ loading: "loading" });
    const { username, otp } = this.state;
    event.preventDefault();
    event.stopPropagation();
    Auth.confirmSignUp(username, otp)
      .then(res => {
        console.log("otp verified", res);
      })
      .catch(err => {
        this.setState({ loading: "" });
        console.log("verify err", err);
      });
    Auth.resendSignUp(username)
      .then(res => {
        this.setState({ loading: "" });
        this.props.history.push(Routes.AI_MARKETPLACE);
        console.log("code resent successfully", res);
      })
      .catch(e => {
        this.setState({ loading: "" });
        console.log(e);
      });
  };
  render() {
    const { otp, username, loading } = this.state;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="OTP">Enter OTP to Verify Email</label>
            <span>{username}</span>
          </div>
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
        {loading}
      </div>
    );
  }
}

export default Verify;
