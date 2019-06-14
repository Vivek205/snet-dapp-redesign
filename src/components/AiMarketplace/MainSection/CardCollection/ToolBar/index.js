import React, { Component } from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';

import StyledDropdown from '../../../../common/StyledDropdown/index.js';

const useStyles = makeStyles(theme => ({
	toolBar:{
		padding: '20px 0'
	},
	sortbyTxt:{
		color: '#9B9B9B',
		fontSize: 18
	},
	servicesCount:{
		color: '#9B9B9B',
		fontSize: 18
	},
	iconsContainer:{
		display: 'flex',
		justifyContent: 'flex-end',
		'& button': {
			border: 'none',
			backgroundColor: 'transparent',
			outline: 'none',
			cursor: 'pointer',
			'& span':{
				color: '#9b9b9b',
				fontSize: 17
			}
		}
	}
}))

function ToolBar (){
	const classes = useStyles();
  return (
  	<Grid container spacing={24} className={classes.toolBar}>
  		<Grid item xs={12} sm={6} md={6} lg={6}>
  			<span className={classes.sortbyTxt}>Sort by:</span>
  		</Grid>
  		<Grid item xs={12} sm={6} md={6} lg={6} className={classes.iconsContainer}>
  			<span className={classes.servicesCount}>33 services  &nbsp;&nbsp;&nbsp; | </span>
  			<button>
  				<Icon className={clsx(classes.icon, 'fa fa-search')} />
  			</button>
  			<button>
  				<Icon className={clsx(classes.icon, 'fa fa-th-list')} />
  			</button>
  			<button>
  				<Icon className={clsx(classes.icon, 'fa fa-th')} />
  			</button>  			
  		</Grid>
  	</Grid>
  );
}

export default ToolBar;