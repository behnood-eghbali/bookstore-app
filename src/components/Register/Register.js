import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import { AuthContext } from '../../contexts/AuthContext'
import './Register.css'

const SubmitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#f73378'),
    backgroundColor: '#f73378',
    '&:hover': {
      backgroundColor: '#880e4f',
    },
  },
}))(Button)

function Register() {

  const { values, checked, handleChange, handleSubmit, handleCheck } = useContext(AuthContext)

  return (
      <div className="Login">
          <Grid container>
              <Grid item xs={3} />
              <Grid item xs={6}>
                  <Paper elevation={3}>
                      <h2>Sign up for Home page</h2>
                      <form onSubmit={handleSubmit} noValidate>
                        <TextField 
                          id="outlined-basic"
                          label="Username"
                          variant="outlined"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                        />
                        <br />
                        <TextField 
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Password"
                          variant="outlined"
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                        />
                        <br />
                        <Link to="/Home">
                          <SubmitButton 
                            type="submit"
                            size="large"
                            fontSize="large"
                            variant="text"
                            color="primary"
                          >
                          Sign up
                          </SubmitButton>
                        </Link>
                      </form>
                      <p>Remember me</p>
                      <Checkbox
                        checked={checked}
                        onChange={handleCheck}
                        inputProps={{ 'aria-label': 'default checkbox' }}
                      />
                      <p>Already have an account?</p>
                      <Link to="/">
                        <Button variant="contained" color="primary">
                        Sign in
                        </Button>
                      </Link>
                  </Paper>
              </Grid>
              <Grid item xs={3} />
          </Grid>
      </div>
  )
}

export default Register