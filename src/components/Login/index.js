import React, { Component } from "react";
import { Link } from "react-router-dom";

// material components
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

// images
import Logo from "../../assets/images/LoginLogo.png";

import { Auth } from "aws-amplify";
import Routes from "../../utility/stringConstants/routes";
import Session from "../../utility/stringConstants/session";

const useStyles = theme => ({
  loginHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: "100%",
    maxWidth: "71%",
    margin: "0 auto",
    padding: "30px 0",
    "& h1": {
      margin: 0
    },
    "& p": {
      color: "#9b9b9b",
      fontSize: "16px"
    },
    "& a": {
      color: "#4086ff",
      textDecoration: "none"
    },
    ["@media (max-width:750px)"]: {
      width: "75%"
    }
  },
  loginHeaderLink: {
    textAlign: "right",
    "& a": {
      "&:hover": {
        textDecoration: "underline"
      }
    },
    ["@media (max-width:750px)"]: {
      maxWidth: "100%",
      flexBasis: "100%",
      textAlign: "left"
    }
  },
  loginDetails: {
    textAlign: "center",
    "& h2": {
      margin: 0,
      fontSize: "36px",
      color: "rgba(0,0,0,.87)"
    }
  },
  loginForm: {
    boxSizing: "border-box",
    width: 410,
    padding: "40px 20px 30px",
    margin: "45px auto 0",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    "& h3": {
      margin: 0,
      color: "rgba(0,0,0,0.6)",
      fontSize: 16,
      letterSpacing: "0.29px",
      textTransform: "uppercase"
    },
    ["@media (max-width:545px)"]: {
      width: "80%"
    }
  },
  githubBtn: {
    width: "100%",
    padding: "12px 0",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#333",
    borderRadius: 4,
    margin: "11px 0 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    transition: "0.3s",
    "& i": {
      fontSize: 24,
      marginRight: 5
    },
    "&:hover": {
      backgroundColor: "#fff",
      borderColor: "#333",
      color: "#333"
    }
  },
  horizontalLine: {
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
    width: "100%"
  },
  checkboxSection: {
    marginTop: 10,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    "& label": {
      color: "#666",
      fontSize: 14,
      letterSpacing: "0.25px"
    },
    "& a": {
      color: "#666",
      fontSize: 14,
      letterSpacing: "0.25px",
      textDecoration: "none"
    },
    ["@media (max-width:400px)"]: {
      flexDirection: "column"
    }
  },
  errorText: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(208,2,27,0.2)",
    padding: "13px 20px",
    margin: "20px 0 !important",
    backgroundColor: "rgba(208,2,27,0.2)",
    color: "rgba(0,0,0,.6)",
    fontSize: "14px !important",
    fontFamily: "Raleway",
    textAlign: "left"
  },
  formButton: {
    width: "100%",
    padding: "13px 0",
    border: 1,
    borderStyle: "solid",
    borderColor: "#4086ff",
    borderRadius: 4,
    backgroundColor: "#4086ff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    textTransform: "uppercase",
    "&:hover": {
      borderColor: "#4086ff",
      backgroundColor: "#fff",
      color: "#4086ff"
    }
  }
});

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: undefined
  };
  handleUsername = event => {
    this.setState({ username: event.currentTarget.value });
  };
  handlePassword = event => {
    this.setState({ password: event.currentTarget.value });
  };
  handleSubmit = event => {
    this.setState({ error: undefined });
    const { username, password } = this.state;
    event.preventDefault();
    event.stopPropagation();
    Auth.signIn(username, password)
      .then(() => {
        this.props.history.push(Routes.AI_MARKETPLACE);
      })
      .catch(err => {
        if (err.code === "UserNotConfirmedException") {
          sessionStorage.setItem(Session.USERNAME, username);
          this.props.history.push(Routes.VERIFY);
          return;
        }
        this.setState({ error: err.message });
      });
  };
  render() {
    const { classes } = this.props;
    const { username, password, error } = this.state;
    return (
      <Grid container spacing={24}>
        <Grid container spacing={24} className={classes.loginHeader}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <h1>
              <a href="#" title="SingularityNET">
                <img src={Logo} alt="SingularityNET" />
              </a>
            </h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className={classes.loginHeaderLink}
          >
            <p>
              Doesn't have an account? <Link to={Routes.SIGNUP}>SignUp</Link>
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.loginDetails}
        >
          <h2>Welcome Back</h2>
          <form noValidate autoComplete="off" className={classes.loginForm}>
            <h3>log in with </h3>
            <button className={classes.githubBtn}>
              <i className="fab fa-github"></i>
              github
            </button>
            <span className={classes.horizontalLine}>or</span>
            <TextField
              id="outlined-user-name"
              label="UserName"
              className={classes.textField}
              // value={this.state.UserName}
              // onChange={this.handleUserNameChange('name')}
              margin="normal"
              variant="outlined"
              value={username}
              onChange={this.handleUsername}
            />
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
              <div className={classes.checkbox}>
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <Link to={Routes.FORGOT_PASSWORD}>Forgot password?</Link>
            </div>
            {error && <p className={classes.errorText}>{error}</p>}
            <button className={classes.formButton} onClick={this.handleSubmit}>
              login
            </button>
          </form>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(useStyles)(Login);
