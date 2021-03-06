import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
// import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
// import { useMutation } from '@apollo/react-hooks'
// import gql from 'graphql-tag'
import './Login.css'

const SubmitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#f73378'),
    backgroundColor: '#f73378',
    '&:hover': {
      backgroundColor: '#880e4f',
    },
  },
}))(Button)

function Login() {

  const { values, handleChange, handleSubmit } = useContext(AuthContext)

/*   const [ errors, setErrors ] = useState({})

  const [ values, setValues ] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const [ addUser, {loading} ] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(result)
      props.history.push('/')
    },
    onError(err){
      console.log(err.graphQLErrors[0].extensions.exception.errors)
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: values
  })

  const onSubmit = (e) => {
    e.preventDefault()
    addUser()
  } */

  return (
      <div className="Login">
          <Grid container>
              <Grid item xs={3} />
              <Grid item xs={6}>
                  <Paper elevation={3}>
                      <h2>Sign in to Home page</h2>
                      <form onSubmit={handleSubmit} noValidate>
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
                        <Link to="/Home">
                          <SubmitButton 
                            type="submit"
                            size="large"
                            fontSize="large"
                            variant="text"
                            color="primary"
                          >
                          Sign in
                          </SubmitButton>
                        </Link>
                      </form>
                      {/*                       
                      {Object.keys(errors).length > 0 && (
                        <div className="ui error message">
                          <ul className="list">
                            {Object.values(errors.map((value) => (
                              <li key={value}>{value}</li>
                            )))}
                          </ul>
                        </div>
                      )}
                      */}
                      <p>Don't have an account?</p>
                      <Link to="/Register">
                        <Button variant="contained" color="primary">
                        Sign up
                        </Button>
                      </Link>
                  </Paper>
              </Grid>
              <Grid item xs={3} />
          </Grid>
      </div>
  )
}
/* 
const LOGIN_USER = gql`
mutation register(
  $email: String!
  $password: String!
){
  login(
    loginInput: {
      email: $email
      password: $password
    }
  ){
    id
    email
  }
}
` */

export default Login


