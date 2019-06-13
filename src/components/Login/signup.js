import React, { Component } from "react";

// material components
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

// images
import Logo from "../../assets/images/LoginLogo.png";

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "71%",
    paddingBottom: 50,
    margin: "0 auto",
    ["@media (max-width:750px)"]: {
      width: "75%"
    }
  },
  loginHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: "100%",
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
    }
  },
  loginHeaderLink: {
    textAlign: "right",
    ["@media (max-width:750px)"]: {
      maxWidth: "100%",
      flexBasis: "100%",
      textAlign: "left"
    }
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
      fontFamily: "Raleway",
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
        fontFamily: "Raleway",
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
      margin: 0,
      color: "rgba(0,0,0,0.6)",
      fontSize: 16,
      letterSpacing: "0.29px",
      textAlign: "center",
      textTransform: "uppercase"
    },
    ["@media (max-width:960px)"]: {
      width: "95%",
      marginTop: 35
    }
  },
  githubBtn: {
    width: "100%",
    padding: "12px 0",
    border: "none",
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
    "& i": {
      fontSize: 24,
      marginRight: 5
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
      display: "block",
      width: 160,
      height: 1,
      backgroundColor: "#F5F7F8",
      marginRight: 10
    },
    "&::after": {
      content: '" "',
      display: "block",
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
    "& div": {
      width: "100%"
    }
  },
  charCount: {
    color: "rgba(0,0,0,0.6)",
    fontFamily: "Raleway",
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  usernameError: {
    color: "#B00020",
    fontFamily: "Raleway",
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  passwordTxt: {
    color: "rgba(0,0,0,0.6)",
    fontFamily: "Raleway",
    fontSize: "12.17px",
    letterSpacing: "0.4px"
  },
  checkboxSection: {
    textAlign: "center",
    "& span": {
      ["@media (max-width:437px)"]: {
        padding: 0
      }
    },
    "& p": {
      margin: "20px 0 0",
      display: "inline-block",
      color: "#666",
      fontSize: 14,
      ["@media (max-width:520px)"]: {
        fontSize: 11
      },
      ["@media (max-width:437px)"]: {
        marginTop: 0
      }
    },
    "& a": {
      color: "#4086ff",
      textDecoration: "none"
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
    border: "none",
    borderRadius: 4,
    backgroundColor: "#4086ff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    textTransform: "uppercase"
  }
}));

function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
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
            Already have an account?{" "}
            <a href="#" title="Signup">
              Login
            </a>
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.signupInfo}>
          <h2>Sign up for your free account in minutes</h2>
          <p>
            Use your Github account to easily get started, or fill out the form.
            Get free credits for the first month and continue with your
            perferred wallet or credit card.
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
                available. Easily refill your credits anytime.
              </p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <form noValidate autoComplete="off" className={classes.signupForm}>
            <h3>sign up with </h3>
            <button className={classes.githubBtn}>
              <i className="fab fa-github"></i>
              github
            </button>
            <span className={classes.horizontalLine}>or</span>
            <div>
              <TextField
                id="outlined-user-name"
                label="UserName"
                className={classes.textField}
                // value={this.state.UserName}
                // onChange={this.handleUserNameChange('name')}
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
              />
              <span className={classes.passwordTxt}>Assistive Text</span>
            </div>
            <div className={classes.checkboxSection}>
              <Checkbox
                value="checked"
                color="primary"
                inputProps={{
                  "aria-label": "secondary checkbox"
                }}
              />
              <p>
                I agree with{" "}
                <a href="#" title="SingularityNET Terms of Service">
                  SingularityNET Terms of Service
                </a>
              </p>
            </div>
            <p className={classes.errorText}>error state message</p>
            <button className={classes.formButton}>create account</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;
