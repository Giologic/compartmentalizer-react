import React from 'react' // React
import { Redirect, Route } from 'react-router-dom' // React Router
import isLoggedIn from './isLoggedIn'

const UnauthenticatedRoute = ({ profile, component: Component, ...rest }) => {
  return (
    <Route { ...rest }
      render={props => {
        if(isLoggedIn()) {
          return (
            <Redirect to="/components" />
          )
        }
        return (
          <Component { ...props} />
        )
      }}
    />
  )
}

export default UnauthenticatedRoute
