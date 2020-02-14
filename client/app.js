import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <center>
        <Navbar />
        <Routes />
      </center>
    </div>
  )
}

export default App
