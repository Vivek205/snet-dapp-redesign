import React, { Component } from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  blueButton: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    padding: '13px 28px 11px',
    backgroundColor: '#4086FF',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '1.25px',
    lineHeight: '16px',
    '&:hover':{
      backgroundColor: '#fff',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#4086FF',
      color: '#4086FF'
    }
  }
}))

function BlueButton (props) {
  const classes = useStyles();
  return (
    <Button className={classes.blueButton}>
      {props.btnText}
    </Button>
  );
}

export default BlueButton;
