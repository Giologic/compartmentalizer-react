import React from 'react'
import SignupForm from '../../components/SignupForm'

const Signup = () => {
  return (
    <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div class="column"></div>
              <div class="column is-one-quarter">
                <SignupForm />
              </div>
              <div class="column"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Signup
