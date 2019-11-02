import React from 'react'
import LoginForm from '../../components/LoginForm'
import useForm from '../../utils/useForm'
import authAPI from '../../api/Auth'
import { withRouter } from 'react-router-dom'
import isLoggedIn from '../../utils/isLoggedIn'
import LocalStorageService from '../../api/LocalStorageService'
const Login = (props) => {

  const defaultCredentials = {
    username: '',
    password: ''
  }

  const submitLogin = async () => {
    await authAPI.login(values).then( response => {
      LocalStorageService.setToken(response.data)
      if(isLoggedIn()) {
        props.history.push("/components")
      }
    }).catch( error => {
      console.log(error)
    })
  }


  const { values, handleChange, handleSubmit } = useForm(submitLogin, defaultCredentials)

  return (
    <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div class="column"></div>
              <div class="column is-one-quarter">
                <LoginForm 
                  user={values}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </div>
              <div class="column"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login
