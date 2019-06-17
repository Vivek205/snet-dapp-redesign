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
    textTransform: "uppercase",
    fontFamily: "OpenSans",
    fontWeight: 600,
    letterSpacing: "1.25px",
    lineHeight: "16px",
    "&:disabled": {
      backgroundColor: "#e6e6e6",
      color: "#bcbcbc"
    }
  },
  blueBg: {
    backgroundColor: "#4086ff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      borderColor: "#4086FF",
      color: "#4086FF"
    }
  }
}));

function StyledButton(props) {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classNames(
          classes.styledButton,
          classes[buttonColor[props.type]]
        )}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.btnText}
      </Button>
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
