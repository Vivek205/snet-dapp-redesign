import React, { Component } from 'react';

import ToolBar from './ToolBar/index.js';
import CardGroup from './CardGroup/index.js';
import Pagination from './Pagination/index.js';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
}))

function CardCollection (){
	const classes = useStyles();
  return (
  	<div>
      <ToolBar />
      <CardGroup />
      <Pagination />
    </div>
  );
}

export default CardCollection;
