import React, { Component } from 'react';
import { Rating } from 'material-ui-rating'

const useStyles = makeStyles(theme => ({
}))

function Rating (props){
	const classes = useStyles();
  return (
  	<Rating
      value={3}
      max={5}
      onChange={(value) => console.log(`Rated with value ${value}`)}
    />
  );
}

export default Rating;
