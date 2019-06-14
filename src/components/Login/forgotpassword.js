import React, { Component } from "react";

// material components
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// images
import Logo from "../../assets/images/LoginLogo.png";

const useStyles = makeStyles(theme => ({
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
}));

function ForgotPassword() {
  const classes = useStyles();
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
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.loginHeaderLink}>
          <p>Already have an account? <a href="#" title="Signup"> Login </a></p>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.forgotPwdContent}>
        <h2>Forgot your pasword?</h2>
        <p>We'll email you instructions on how to reset it.</p>
        <form noValidate autoComplete="off" className={classes.forgotPwdForm}>
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
          <p className={classes.errorText}>error state message</p>
          <button className={classes.formButton}>reset password</button>
        </form>
      </Grid>
    </Grid>
  );
}

export default ForgotPassword;
