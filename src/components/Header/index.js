import React, {useState, useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import isLoggedIn from '../../utils/isLoggedIn'
import { baseUrl } from '../../config/baseConfig'
import LocalStorageService from '../../api/LocalStorageService'

const Header = (props) => {

  const logout = () => {
    LocalStorageService.clearToken()
    window.location.href='/login'
  }

  const { location } = props
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    console.log("PATH", location.pathname)
    if(isLoggedIn()) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [location.pathname]);
  

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to='/index' class="">
              <h1 className="title">
                Compartmentalizer
              </h1>
            </Link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
            { 
              isAuthenticated ? (
                <>
                { console.log("True")}
                <button class="button is-dark" onClick={logout}>
                  <strong>Logout</strong>
                </button>
                </>
              ) : (
                <>
                  <Link to='/signup' class="button is-link">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to='/login' class="button is-dark">
                    Log in
                  </Link>
                </>
              )
            }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default withRouter(Header)
