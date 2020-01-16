import React from 'react'
import {BrowseRouter as Router, Route, Link, Switch} from 'react-router-dom'

const Root = () => {
  return (
    <Router>
      <div>
        <center>
          <main>
            <h1> Joanne The Groomer </h1>
            <h2> Sign Up!</h2>
            <h2> About Me:</h2>
          </main>
          <Switch>
            <Route exact path="/" />
          </Switch>
        </center>
      </div>
    </Router>
  )
}

export default Root
