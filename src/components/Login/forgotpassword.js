import React, { Component } from "react";

import { Link } from "react-router-dom";


// material components
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/styles";

// images
import Logo from "../../assets/images/LoginLogo.png";
import Routes from "../../utility/stringConstants/routes";
import { Auth } from "aws-amplify";
import Session from "../../utility/stringConstants/session";

const useStyles = theme => ({

  loginHeader: {
    width: "71%",
    padding: "30px 0",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    '& a': {
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    ["@media (max-width:750px)"]: {
      maxWidth: "100%",
      flexBasis: "100%",
      textAlign: "left"
    }
  },
  forgotPwdContent: {
    textAlign: "center",
    "& h2": {
      margin: 0,
      fontSize: "36px",
      color: "rgba(0,0,0,.87)"
    },
    "& p": {
      margin: "17px 0 0",
      color: "#616161",
      fontSize: "22px",
      fontFamily: "Raleway"
    },
    ["@media (max-width:527px)"]: {
      width: "75%",
      margin: "0 auto",
      flexBasis: "90%"
    }
  },
  forgotPwdForm: {
    boxSizing: "border-box",
    width: 410,
    padding: "40px 20px 30px",
    margin: "45px auto 0",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    ["@media (max-width:527px)"]: {
      width: "100%"
    }
  },
  textField: {
    width: "100%",
    margin: 0
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
    borderStyle: 'solid',
    borderColor: '#4086ff',
    borderRadius: 4,
    backgroundColor: "#4086ff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    textTransform: "uppercase",
    '&:hover':{
      borderColor: '#4086ff',
      backgroundColor: '#fff',
      color: '#4086ff'
    }
  }
});
class ForgotPassword extends Component {
  state = {
    username: "",
    error: undefined
  };
  handleUsername = event => {
    this.setState({ username: event.currentTarget.value });
  };
  handleSubmit = event => {
    this.setState({ error: undefined });
    const { username } = this.state;

    event.preventDefault();
    event.stopPropagation();
    Auth.forgotPassword(username)
      .then(res => {
        console.log(res);
        sessionStorage.setItem(Session.USERNAME, username);
        this.props.history.push(Routes.FORGOT_PASSWORD_SUBMIT);
      })
      .catch(err => {
        console.log("forgot password err", err);
        this.setState({ error: err.message });
      });
  };
  render() {
    const { classes } = this.props;
    const { username, error } = this.state;
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
              Already have an account? <Link to={Routes.LOGIN}>Login</Link>
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.forgotPwdContent}
        >
          <h2>Forgot your pasword?</h2>
          <p>We'll email you instructions on how to reset it.</p>
          <form noValidate autoComplete="off" className={classes.forgotPwdForm}>
            <TextField
              id="outlined-username-input"
              label="User Name"
              className={classes.textField}
              type="text"
              name="username"
              margin="normal"
              variant="outlined"
              value={username}
              onChange={this.handleUsername}
            />
            {error && <p className={classes.errorText}>{error}</p>}
            <button className={classes.formButton} onClick={this.handleSubmit}>
              reset password
            </button>
          </form>
        </Grid>

      </Grid>
    );
  }
}
export default withStyles(useStyles)(ForgotPassword);
