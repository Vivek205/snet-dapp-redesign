import React, { Component } from 'react';

// imported components
import Filter from './Filter/index.js';
import CardCollection from './CardCollection/index.js';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  mainSection:{
    padding: '40px 0 60px'
  }
}))

function MainSection (props){
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

export default MainSection;
