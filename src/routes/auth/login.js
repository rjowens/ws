import auth from '../../service/auth_api';
import React, { Component } from 'react';
import { Router } from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      password: ''
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePWChange = this.handlePWChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginSuccess = this.loginSuccess.bind(this)
  }

  loginSuccess() {
    if (location.state && location.state.nextPathname) {
      this.props.router.replace(location.state.nextPathname)
    } else {
      this.props.router.replace('/search')
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    auth.login(this.state.user, this.state.password, this.loginSuccess)
  }

  handleUserChange(event) {
    this.setState({user: event.target.value});
  }

  handlePWChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="container password">
        <div className="col-md-offset-4 col-md-4 well">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control input-sm chat-input"
              placeholder="Email"
              onChange={this.handleUserChange}>
            </input>
            <br/>
            <input type="password"
              className="form-control input-sm chat-input"
              placeholder='Password'
              onChange={this.handlePWChange}>
            </input>
            <br/>
            <button
              className="btn btn-default btn-success"
              >Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
