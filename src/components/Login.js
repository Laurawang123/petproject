import React, { useState } from 'react'
import "../styles/Login.css"

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)

  const handleLogin = () => {
    // add login logic here, send a request to backend API etc
    // access the email and password values using the email and password states
  }

  const handleRegisterOption = () => {
    setIsRegistered(!isRegistered)
  }

  return (
    <div className="login-container">
      <div className="login-page">
        <h2>{isRegistered ? 'Login' : 'Register'}</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>
            {isRegistered ? 'Login' : 'Register'}
          </button>
        </form>
        <p>
          {isRegistered
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span
            className="register-option"
            onClick={handleRegisterOption}
          >
            {isRegistered ? 'Register' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
