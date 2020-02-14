import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React, {Component} from 'react'

export default class Grooming extends Component {
  render() {
    return (
      <div>
        <h2> Available grooming options: </h2>
        <Link style={{color: 'white'}} to="/">
          <ul>Partial Groom</ul>
        </Link>

        <Link style={{color: 'white'}} to="/">
          <ul>Full Groom</ul>
        </Link>
      </div>
    )
  }
}
