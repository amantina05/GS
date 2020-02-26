import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React, {Component} from 'react'

export default class Grooming extends Component {
  render() {
    return (
      <div>
        <h3>
          All doggies seeking grooming services MUST be up to date and show
          PROOF of the following Vaccinations:
        </h3>
        <h3>
          <li>Rabies</li>
        </h3>
        <h2> Available grooming options: </h2>
        <p>Bath based on size starting at $50</p>
        <p>Dematting $25 per 1/2 hour</p>
        <div align="left">
          <Link style={{color: 'white'}} to="/">
            <ul>Additional Services</ul>
          </Link>
          <li>Teeth cleaning $12</li>
          <li>Anal glands cleaning $15</li>
          <li>Ear cleaning $8</li>
          <li>Eye cleaning $5</li>
          <li>Nail trim $10</li>
          <li>Nail grinding $15</li>
          <li>Private parts trim $12</li>
          <li>Furminator Shampoo add on extra $15</li>
          <p>
            Furminator Ultra Premium Dog Shampoo. Works to reduce shedding.
            Promotes both healthy skin and coat. Is enriched with Omega 3 and 6
            Fatty Acadis, Calendula Extract, and Papaya Leaf Extract.
          </p>

          <Link style={{color: 'white'}} to="/">
            <ul>Pamper Groom</ul>
          </Link>
          <p>Lets pamper those paws and ears! Starting at $35</p>
          <li>Light feet trim and pad shaving</li>
          <li>Nail trim and nail grinding</li>
          <li>Ear cleaning and hair removal</li>
          <li>Scented body mist referesher</li>
          <li>Teeth brushing</li>
          <Link style={{color: 'white'}} to="/">
            <ul>Puppy Groom</ul>
          </Link>
          <p>
            An introduction to the grooming experience for puppies 4 months and
            younger! Starting at $50
          </p>
          <li>Bath and drying</li>
          <li>Nail trim and paw pad trim</li>
          <li>Ear and eye cleaning </li>
          <li>Sanitary trimming</li>
          <li>Scented body mist referesher</li>

          <Link style={{color: 'white'}} to="/">
            <ul>Mini Groom</ul>
          </Link>

          <p>
            Bath with shampoo and conditioner, blow dry, brushing, nail
            trimming, ear and eye cleaning, anal glands cleaning, private parts
            trim, and tons of love and undivided attention. Best for in-between
            haircuts or digs who do not need haircuts. <b> Appointment Only</b>
          </p>

          <li> less than 25 lbs pups: starting at $60</li>
          <li> 26-55 lbs pups: starting at $70</li>
          <li> 56-100 lbs pups: starting at $80</li>
          <li> more than 101 lbs pups: starting at $90</li>

          <Link style={{color: 'white'}} to="/">
            <ul>Full Groom</ul>
          </Link>

          <p>
            Haircut and style, bath with shampoo and conditioner. Blow dry,
            brushing, nail trim, ear and eye cleaning, anal gland cleaning,
            teeth brushing, and tons of love and undivided attention.
            <b> Appointment only.</b>
          </p>

          <li> less than 25 lbs pups: starting at $80</li>
          <li> 26-55 lbs pups: starting at $90</li>
          <li> 56-100 lbs pups: starting at $100</li>
          <li> more than 101 lbs pups: starting at $120</li>
          <Link style={{color: 'white'}} to="/calendar">
            <ul>To book an Appointment</ul>
          </Link>
          <p>Rates will be based on size, behavior and cost condition.</p>
        </div>
      </div>
    )
  }
}
