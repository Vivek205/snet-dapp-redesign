import React, { Component } from 'react';

// import components
import Header from '../common/Header/index.js';
import Footer from '../common/Footer/index.js';
import BlueButton from '../common/BlueButton/index.js';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	description: {
		margin: 0,
		color: 'rgba(0,0,0,0.87)',
		fontFamily: 'Raleway',
		fontSize: 24,
		lineHeight: '29px'
	}	
}))

function AiMarketplace (){
	const classes = useStyles();
  return (
  	<div>
    	<Header />
    	<Grid container spacing={24}>
    		<Grid item xs={12} sm={3} md={3} lg={3}>
    			<h2>AI Marketplace</h2>
    		</Grid>
    		<Grid item xs={6} sm={6} md={6} lg={6}>
    			<p className={classes.description}>Want to find the right AI service for your project? You’ve come to the right place. We’ve got a growing marketplace with hundreds of AI services for you to utilize. They’re powered by a community of  amazing developers from all over the globe.</p>
    			<BlueButton 
    				btnText = "Sign up for free credits"
    			/>    		
    		</Grid>
    	</Grid>
    	<Footer />
    </div>
  );
}

export default AiMarketplace;
