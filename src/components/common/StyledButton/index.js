import React, { Component } from "react";
import PropTypes from "prop-types";

// Material UI imports
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const buttonColor = {
  blue: "blueBg",
  gradient: "classTwo"
};

const useStyles = makeStyles(theme => ({
  styledButton: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    padding: "13px 28px 11px",
    backgroundColor: "#4086FF",
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "OpenSans",
    fontWeight: 600,
    letterSpacing: "1.25px",
    lineHeight: "16px",
    // '&.blueBg':{
    //   backgroundColor: '#4086FF'
    // },
    "&:hover": {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#4086FF",
      color: "#4086FF"
    }
  }
}));

function StyledButton(props) {
  const classes = useStyles();

  return (
    <>
      <Button className={classNames("styledButton", buttonColor[props.type])}>
        {props.btnText}
      </Button>

      <Button className={classes.styledButton}>{props.btnText}</Button>
    </>
  );
}

StyledButton.propTypes = {
  type: PropTypes.oneOf(["blue", "gradient"])
};

StyledButton.defaultProps = {
  type: "blue"
};

export default StyledButton;
