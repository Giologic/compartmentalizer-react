import React from 'react' // React
import { Redirect, Route } from 'react-router-dom' // React Router
import isLoggedIn from './isLoggedIn'

const AuthenticatedRoute = ({ profile, component: Component, ...rest }) => {
  return (
    <Route { ...rest }
      render={props => {
        if(!isLoggedIn()) {
          console.log(isLoggedIn())
          return (
            <Redirect to="/login" />
          )
        }
        return (
          <Component { ...props} />
        )
      }}
    />
  )
}

export default AuthenticatedRoute
