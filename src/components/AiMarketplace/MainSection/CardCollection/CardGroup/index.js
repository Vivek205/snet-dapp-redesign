import React, { Component } from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/styles';

import StyledCard from './StyledCard/index.js';

import CardImg from '../../../../../assets/images/dummy-card.png';

const useStyles = makeStyles(theme => ({
}))

function CardGroup (){
	const classes = useStyles();
  return (
  	<StyledCard 
  		cardMedia = {CardImg}
  	/>
  );
}

export default CardGroup;
