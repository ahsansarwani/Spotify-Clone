import React from 'react'
import './Login.css'
import { loginurl } from './spotify'

function Login() {
    return (
        <div className="Login">
          <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginurl}>Login with spotify</a>
        </div>
    )
}

export default Login
