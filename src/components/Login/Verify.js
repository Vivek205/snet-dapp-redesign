import React, { Component } from "react";
import { Auth } from "aws-amplify";

class Verify extends Component {
  state = {
    otp: ""
  };
  componentDidMount = () => {
    console.log(
      "username",
      this.props.location.state.username,
      this.props.history
    );
  };
  handleChange = event => {
    this.setState({ otp: event.target.value });
  };
  handleSubmit = event => {
    const { username } = this.props.location.state;
    event.preventDefault();
    event.stopPropagation();
    Auth.confirmSignUp(username.name, this.state.otp)
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
