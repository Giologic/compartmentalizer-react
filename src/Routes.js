import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import Header from './components/Header'
import Signup from './containers/Signup'
import ComponentPage from './containers/ComponentPage'
import ProductPage from './containers/ProductPage'
import AuthenticatedRoute from './utils/AuthenticatedRoute'
import UnauthenticatedRoute from './utils/UnauthenticatedRoute'
import NoMatch from './components/NoMatch'

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <UnauthenticatedRoute path='/signup' component={Signup} />
          <UnauthenticatedRoute path='/login' component={Login} />
          <UnauthenticatedRoute path='/index' component={Home} />
          <AuthenticatedRoute path='/components' component={ComponentPage} />
          <AuthenticatedRoute path='/products' component={ProductPage} />
          {/* <Route exact path='/error/404' component={NoMatch}/> */}
          {/* <Route render={() => <Redirect to={{pathname: "/error/404"}} />} /> */}
          
        </Switch>
      </Router>
    </>
  )
}

export default Routes
