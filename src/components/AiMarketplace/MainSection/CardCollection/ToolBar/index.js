import React, { Component } from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
}))

function ToolBar (){
	const classes = useStyles();
  return (
  	<div>
      <span>ToolBar</span>
    </div>
  );
}

export default ToolBar;
