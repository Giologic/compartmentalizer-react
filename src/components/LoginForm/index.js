import React from 'react'

const LoginForm = (props) => {
  const { user, handleChange, handleSubmit } = props


  return (
    <>
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} required/>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required/>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <button type="submit" className="button is-link is-fullwidth">Login</button>
        </div>
      </form>
    </>
  )
}

export default LoginForm
