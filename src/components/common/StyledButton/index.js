import React, { Component } from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import classNames from "classnames"

const useStyles = makeStyles(theme => ({
  styledButton: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    padding: '13px 28px 11px',
    backgroundColor: '#4086FF',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'OpenSans',
    fontWeight: 600,
    letterSpacing: '1.25px',
    lineHeight: '16px',
    // '&.blueBg':{
    //   backgroundColor: '#4086FF'
    // },
    '&:hover':{
      backgroundColor: '#fff',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#4086FF',
      color: '#4086FF'
    }    
  },
}))

function StyledButton (props) {
  const classes = useStyles();
  return (
    // <Button className={classNames('styledButton',
    //         {blueBg: props.type == 'blue'}, 
    //         {classTwo: props.type == 'gradient'}
    //       )}
    // >
    //   {props.btnText}
    // </Button>

    <Button className={classes.styledButton}
    >
      {props.btnText}
    </Button>
  );
}

export default StyledButton;
