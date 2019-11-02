import React from 'react'

const SignupForm = () => {
  return (
    <>
     <h1 className="title">Sign Up</h1>
     <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" placeholder="Username" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p class="help is-success">This username is available</p>
    </div>

    <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>


    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Sign Up</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
    </>
  )
}

export default SignupForm
