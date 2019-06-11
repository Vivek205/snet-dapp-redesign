import React, { Component } from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
	filterResetBtnContainer: {
		padding: '15px 22px',
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#fafafa'
	},
	h2: { 
		color: 'rgba(0,0,0,.84)'
	},
	resetBtn:{
		border: 'none',
		backgroundColor: 'transparent',
		color: '#4086FF',
		cursor: 'pointer',
		fontSize: 14,
		outline: 'none',
		textTransform: 'uppercase',
		fontFamily: 'OpenSans !important'
	},
	filterExpansionPanel: {
		boxShadow: 'none',
		backgroundColor: '#0000000a'
	},
	filtersHeadingTitle: {
		color: '#4a4a4a',
		fontSize: 16,
		fontFamily: 'OpenSans'
	},
	filterDetails: {
		backgroundColor: '#fff',
		flexDirection: 'column'
	},
	formCntrlGrup: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& svg':{
			color: '#4086FF !important'
		}
	},
	count: {
		color: '#666',
		fontFamily: 'Roboto',
		fontSize: 14
	},
	checkboxLabel:{
		fontFamily: 'OpenSans',
		fontSize: 14,
    letterSpacing: '0.25px',
    color: '#666'
	}
}))

function Filter (){
	const classes = useStyles();
  return (
  	<div className={classes.root}>
      <div className={classes.filterResetBtnContainer}>
        <h2 className={classes.h2}>Filters</h2>
        <button className={classes.resetBtn} type="reset" value="Reset">Reset</button>
      </div>
      <div>
      	<ExpansionPanel className={classes.filterExpansionPanel}>
        	<ExpansionPanelSummary
        		expandIcon={<ExpandMoreIcon />}
      			aria-controls="panel1a-content"
      			id="panel1a-header"
    			>
          	<Typography className={classes.filtersHeadingTitle}>Categories</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.filterDetails}>
            <div className={classes.formCntrlGrup}>
              <FormControlLabel
                control={<Checkbox checked={true} value="textAnalysis" />}
                label="Text Analysis"
                classes={{
        					label: classes.checkboxLabel,
      					}}
      				/>
              <span className={classes.count}>23</span>
            </div>
            <div className={classes.formCntrlGrup}>
              <FormControlLabel
                control={<Checkbox checked={false} value="computerVision" />}
                label="Computer Vision"
                classes={{
        					label: classes.checkboxLabel,
      					}}
              />
              <span className={classes.count}>45</span>
            </div>
            <div className={classes.formCntrlGrup}>
              <FormControlLabel
                control={<Checkbox checked={false} value="deepLearning" />}
                label="Deep Learning"
                classes={{
        					label: classes.checkboxLabel,
      					}}
              />
              <span className={classes.count}>14</span>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.filterExpansionPanel}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.filtersHeadingTitle}>Price</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.filterDetails}>
                <FormControlLabel
                  control={<Checkbox checked={false} value="textAnalysis" />}
                  label="Text Analysis"
                  classes={{
        					label: classes.checkboxLabel,
      					}}
                />
              </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.filterExpansionPanel}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.filtersHeadingTitle}>Vendors</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.filterDetails}>
                <FormControlLabel
                  control={<Checkbox checked={false} value="textAnalysis" />}
                  label="Text Analysis"
                  classes={{
        					label: classes.checkboxLabel,
      					}}
                />
              </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

export default Filter;