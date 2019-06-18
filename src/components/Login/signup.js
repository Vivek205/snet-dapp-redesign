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

import Routes from "../../utility/stringConstants/routes";

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
      color: theme.palette.text.black1,
      fontSize: 36
    },
    "& p": {
      margin: "40px 0 40px",
      color: theme.palette.text.gray3,
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
        color: theme.palette.text.green,
        fontSize: 20
      },
      "& p": {
        color: theme.palette.text.gray3,
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
      color: theme.palette.text.gray2,
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
    color: theme.palette.text.gray2,
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "center",
    "&::before": {
      content: '" "',
      display: "inline-block",
      verticalAlign: "middle",
      width: 160,
      height: 1,
      backgroundColor: theme.palette.text.gray5,
      marginRight: 10
    },
    "&::after": {
      content: '" "',
      display: "inline-block",
      verticalAlign: "middle",
      width: 160,
      height: 1,
      marginLeft: 10,
      backgroundColor: theme.palette.text.gray5
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
    color: theme.palette.text.gray2,
    fontFamily: theme.typography.secondary.main,
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  usernameError: {
    color: theme.palette.text.gray6,
    fontFamily: theme.typography.secondary.main,
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  passwordTxt: {
    color: theme.palette.text.gray2,
    fontFamily: theme.typography.secondary.main,
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  checkboxSection: {
    textAlign: "center",
    "& p": {
      display: "inline-block",
      color: theme.palette.text.gray4
    },
    "& a": {
      color: theme.palette.text.primary,
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
    hasAcceptedTerms: false
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
    event.stopPropagation();
    const { username, password, email } = this.state;
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
        this.props.history.push(Routes.VERIFY);
      })
      .catch(err => alert(err.message));
  };

  shouldSubmitBeDisabled = () => {
    const { username, email, password, hasAcceptedTerms } = this.state;
    if ((username !== "", email !== "", password !== "", hasAcceptedTerms)) {
      return false;
    }
    return true;
  };

  render() {
    const { username, email, password, hasAcceptedTerms } = this.state;
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
              {" "}
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
              <div>
                <TextField
                  id="outlined-user-name"
                  label="Username"
                  className={classes.textField}
                  value={username}
                  onChange={this.handleUsername}
                  margin="normal"
                  variant="outlined"
                />
                <span className={classes.charCount}>13/20 char</span>
              </div>
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
                <span className={classes.usernameError}>
                  Error msg - invalid email
                </span>
              </div>
              <div>
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
                <span className={classes.passwordTxt}>Assistive Text</span>
              </div>
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
