import React, { Component } from "react";

// imported components
import Filter from "./Filter/index.js";
import CardCollection from "./CardCollection/index.js";

// Material UI imports
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Auth, API } from "aws-amplify";
import { withStyles } from "@material-ui/styles";

const useStyles = theme => ({
  mainSection: {
    padding: "40px 0 60px"
  }
});

class MainSection extends Component {
  componentDidMount = () => {
    Auth.currentSession()
      .then(data => {
        console.log(data);
        this.fetchService(data.idToken.jwtToken);
      })
      .catch(err => console.log(err));
  };
  fetchService = jwtToken => {
    API.get("Get Service", "/signup", {
      headers: {
        Authorization: jwtToken
      }
    })
      .then(res => {
        console.log("fetchservice response", res);
        this.setState({ message: res.message });
      })
      .catch(err => {
        console.log("fetchService err", err);
      });
  };
  render() {
    const classes = useStyles();
    return (
      <Grid container spacing={24} className={classes.mainSection}>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Filter />
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <CardCollection />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(MainSection);
