import React, {Component} from 'react'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      name: '',
      email: '',
      description: ''
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1> Connect with me!</h1>
        <h2>Instagram:</h2>
        <h2>Twitter:</h2>

        <h1> Contact Me: </h1>
        <form
          action="mailto:amatinasosa@aol.com"
          method="get"
          encType="text/plain"
        >
          <label htmlFor="name">
            <b>Name:</b>
            {/* {this.state.name.length > 0 ? (
              console.log(this.state.name)
            ) : (
              <span className="warning">Field is required!</span>
            )} */}
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="email">
            <b>Email:</b>
            {/* {this.state.email.length > 0 ? (
              console.log(this.state.email)
            ) : (
              <span className="warning">Field is required!</span>
            )} */}
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="description">
            <b>Comment:</b>
            {/* {this.state.description.length > 0 ? (
              console.log(this.state.description)
            ) : (
              <span className="warning">Field is required!</span>
            )} */}
          </label>
          <input
            type="text"
            name="description"
            placeholder="Enter concern"
            value={this.state.description}
            onChange={this.handleChange}
            size="50"
            // required
          />
          <br />
          {/* <input type="submit" value="Send" />
          <input type="reset" value="Reset" /> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Contact
