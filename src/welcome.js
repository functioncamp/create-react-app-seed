import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './welcome.css'

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="app-link" to="/otherPage">
          Link to other page
        </Link>
      </header>
    </div>
  )
}

export default App
