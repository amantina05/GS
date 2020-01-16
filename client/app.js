import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <center>
        <Navbar />
        <main>
          <center>
            <h2> About Me:</h2>
            <h3>
              Another journey chamber way yet females man. Way extensive and
              dejection get delivered deficient sincerity gentleman age. Too end
              instrument possession contrasted motionless. Calling offence six
              joy feeling. Coming merits and was talent enough far. Sir joy
              northward sportsmen education. Discovery incommode earnestly no he
              commanded if. Put still any about manor heard. Demesne far hearted
              suppose venture excited see had has. Dependent on so extremely
              delivered by. Yet ﻿no jokes worse her why. Bed one supposing
              breakfast day fulfilled off depending questions. Whatever boy her
              exertion his extended. Ecstatic followed handsome drawings
              entirely mrs one yet outweigh. Of acceptance insipidity remarkably
              is invitation. Am increasing at contrasted in favourable he
              considered astonished.
            </h3>
            <h2> Available grooming options: </h2>
            <Link style={{color: 'white'}} to="/">
              <ul>Partial Groom</ul>
            </Link>

            <Link style={{color: 'white'}} to="/">
              <ul>Full Groom</ul>
            </Link>
          </center>
        </main>
        <br />
        <Routes />
      </center>
    </div>
  )
}

export default App
