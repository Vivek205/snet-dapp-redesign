import React, { Component } from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    backgroundColor: theme.palette.primary
  }
}))

function StyledDropdown (props) {
  const classes = useStyles();

   const [state, setState] = React.useState({
    featured: '',
  });

    const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="featured-label">Featured</InputLabel>
      <Select
        native
        value={state.featured}
        onChange={handleChange('featured')}
        inputProps={{
          name: 'featured',
          id: 'featured-label',
        }}
      >
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  );
}

export default StyledDropdown;
