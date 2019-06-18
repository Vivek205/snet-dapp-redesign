import React, { Component } from "react";
import { Auth } from "aws-amplify";

// material components
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";

// internal components
import Header from "../common/LoginOnboardingHeader/index.js";
import StyledButton from "../common/StyledButton/index.js";
import ErrorMsgBox from "../common/ErrorMsgBox/index.js";

// images

import Routes from "../../utility/stringConstants/routes";
import { isValidEmail } from "../../utility/validation";
import Session from "../../utility/stringConstants/session";

const useStyles = theme => ({
  signupMainContent: {
    width: "71%",
    paddingBottom: 50,
    margin: "0 auto"
  },
  signupContent: {
    width: "71%",
    margin: "0 auto"
  },
  signupInfo: {
    paddingRight: 100,
    ["@media (max-width:960px)"]: {
      paddingRight: 0
    },
    "& h2": {
      margin: 0,
      color: "rgba(0,0,0,0.87)",
      fontSize: 36
    },
    "& p": {
      margin: "40px 0 40px",
      color: "#616161",
      fontFamily: theme.typography.secondary.main,
      fontSize: 20,
      lineHeight: "30px"
    },
    "& ul": {
      margin: 0,
      padding: 0
    },

    "& li": {
      marginBottom: 15,
      listStyle: "none",
      "& i": {
        marginRight: 15,
        color: "#00C48C",
        fontSize: 20
      },
      "& p": {
        color: "#666",
        fontFamily: theme.typography.secondary.main,
        fontSize: 16,
        letterSpacing: "0.29px",
        display: "inline-block",
        margin: 0,
        width: "84%",
        verticalAlign: "top"
      }
    }
  },
  signupForm: {
    boxSizing: "border-box",
    width: 410,
    padding: "20px 20px 30px",
    margin: "0 auto",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    "& h3": {
      margin: "0 0 11px",
      color: "rgba(0,0,0,0.6)",
      fontSize: 16,
      letterSpacing: "0.29px",
      textAlign: "center",
      textTransform: "uppercase"
    },
    "& button": { width: "100%" },
    ["@media (max-width:960px)"]: {
      width: "95%",
      marginTop: 35
    }
  },
  horizontalLine: {
    marginTop: 15,
    display: "block",
    color: "rgba(0,0,0,0.6)",
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "center",
    "&::before": {
      content: '" "',
      display: "inline-block",
      verticalAlign: "middle",
      width: 160,
      height: 1,
      backgroundColor: "#F5F7F8",
      marginRight: 10
    },
    "&::after": {
      content: '" "',
      display: "inline-block",
      verticalAlign: "middle",
      width: 160,
      height: 1,
      marginLeft: 10,
      backgroundColor: "#F5F7F8"
    }
  },
  textField: {
    width: "100%",
    marginBottom: 0,
    display: "inline-block",
    "& label": {
      fontFamily: theme.typography.primary.main
    },
    "& div": {
      width: "100%"
    }
  },
  charCount: {
    color: "rgba(0,0,0,0.6)",
    fontFamily: theme.typography.secondary.main,
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  usernameError: {
    color: "#B00020",
    fontFamily: theme.typography.secondary.main,
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  passwordTxt: {
    color: "rgba(0,0,0,0.6)",
    fontFamily: theme.typography.secondary.main,
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  checkboxSection: {
    textAlign: "center",
    "& p": {
      display: "inline-block",
      color: "#666"
    },
    "& a": {
      color: theme.palette.primary.main,
      fontSize: 14,
      textDecoration: "none"
    }
  }
});

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    hasAcceptedTerms: false,
    error: undefined
  };

  handleUsername = event => {
    this.setState({ username: event.currentTarget.value });
  };

  handleEmail = event => {
    this.setState({ email: event.currentTarget.value });
  };

  handlePassword = event => {
    this.setState({ password: event.currentTarget.value });
  };

  handleAcceptedTerms = () => {
    this.setState(prevState => ({
      hasAcceptedTerms: !prevState.hasAcceptedTerms
    }));
  };

  handleSubmit = event => {
    console.log("create account clicked");
    event.preventDefault();
    const { username, password, email, hasAcceptedTerms } = this.state;
    if (username === "") {
      this.setState({ error: "Please enter a username" });
      return;
    }
    if (email === "") {
      this.setState({ error: "Email cannot be left blank" });
      return;
    }
    if (!isValidEmail(email)) {
      this.setState({ error: "Please enter a valid email" });
      return;
    }
    if (password === "") {
      this.setState({ error: "Password cannot be left blank" });
      return;
    }

    if (!hasAcceptedTerms) {
      this.setState({ error: "Please accept the terms to proceed" });
      return;
    }
    this.setState({ error: undefined });

    event.stopPropagation();
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        name: username
      }
    })
      .then(user => {
        console.log("user", user);
        sessionStorage.setItem(Session.USERNAME, username);
        this.props.history.push(Routes.VERIFY);
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    const { username, email, password, hasAcceptedTerms, error } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Header title="Already have an account?" linkText="Login" />
        <Grid container spacing={24} className={classes.signupMainContent}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.signupInfo}
          >
            <h2>Sign up for your free account in minutes</h2>
            <p>
              Use your Github account to easily get started, or fill out the
              form. Get free credits for the first month and continue with your
              perferred wallet or credit card.{" "}
            </p>
            <ul>
              <li>
                <i className="fas fa-check-circle"></i>
                <p>Built for you, powered for enterprise.</p>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <p>
                  Get 100 free credits to try out any of the AI services
                  available. Easily refill your credits anytime.{" "}
                </p>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <form noValidate autoComplete="off" className={classes.signupForm}>
              <h3>sign up with </h3>
              <StyledButton
                btnText="github"
                type="black"
                iconClass="fab fa-github"
              />
              <span className={classes.horizontalLine}>or</span>
              <TextField
                id="outlined-user-name"
                label="UserName"
                className={classes.textField}
                value={username}
                onChange={this.handleUsername}
                margin="normal"
                variant="outlined"
              />
              <div>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  value={email}
                  onChange={this.handleEmail}
                />
                {email !== "" && !isValidEmail(email) && (
                  <span className={classes.usernameError}>
                    Error msg - invalid email
                  </span>
                )}
              </div>
              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={this.handlePassword}
              />
              <div className={classes.checkboxSection}>
                <input
                  type="checkbox"
                  checked={hasAcceptedTerms}
                  onChange={this.handleAcceptedTerms}
                />
                <p>
                  I agree with{" "}
                  <a href="#" title="SingularityNET Terms of Service">
                    SingularityNET Terms of Service
                  </a>
                </p>
              </div>
              <ErrorMsgBox errorMsg="error state message" showErr />

              <StyledButton
                type="blue"
                btnText="Sign up for free credits"
                disabled={this.shouldSubmitBeDisabled()}
                onClick={this.handleSubmit}
              />
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(SignUp);
