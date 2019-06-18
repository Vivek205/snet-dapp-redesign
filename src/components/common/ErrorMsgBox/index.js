import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/styles";

const useStyles = theme => ({
  errorText: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(208,2,27,0.2)",
    padding: "13px 20px",
    backgroundColor: "rgba(208,2,27,0.2)",
    color: "rgba(0,0,0,.6)",
    fontSize: "14px !important",
    fontFamily: theme.typography.secondary.main,
    textAlign: "left"
  }
});

class ErrorMsgBox extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        {this.props.showErr ? (
          <p className={classes.errorText}>{this.props.errorMsg}</p>
        ) : null}
      </Fragment>
    );
  }
}

export default withStyles(useStyles)(ErrorMsgBox);
