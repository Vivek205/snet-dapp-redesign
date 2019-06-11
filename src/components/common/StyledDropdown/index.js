import React, { Component } from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
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
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <span>Sort by:</span>
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
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <span>33 services</span>
      </Grid>
    </Grid>
  );
}

export default StyledDropdown;
