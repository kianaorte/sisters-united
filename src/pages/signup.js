import React, { Component } from 'react';

import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import propTypes from 'prop-types';

const styles = {
  form: {
    textAlign: 'center',
    margin: '25px 25px 25px 25px'
  },
  title: {
    textAlign: 'center',
    marginLeft: 25,
    marginTop: 20
  },
  button: {
    marginBottom: '20px'
  },
  submitButton: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  otherError: {
    color: 'red',
    fontSize: 12,
    marginTop: '20px'
  }
}

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('./signup', userData).then((res) => {
      console.log(res.data);
      this.setState({
        loading: false
      });
      this.props.history.push('./');
    }).catch((err) => {
      this.setState({
        errors: err.response.data,
        loading: false
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h4" className={classes.title}>
            Sign up
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField id="email" name="email" label="Email" className={classes.textField} helperText={errors.email}
              error={errors.email ? true : false} value={this.state.email} onChange={this.handleChange} fullWidth />
            <TextField id="password" type="password" name="password" helperText={errors.password}
              error={errors.email ? true : false} label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange} fullWidth />
            {errors.general && (
              <Typography variant="body2" className={classes.otherError}>
                {errors.general}
              </Typography>
            )}
           
            <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
              Signup
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signup.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(signup);