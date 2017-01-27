import auth from '../../service/auth_api';
import React, { Component } from 'react';
import { Router } from 'react-router';

class Login extends Component {

  componentDidMount() {
    auth.logout(() => this.props.router.replace('/login'));
  }

  render() {
    return <p>You are logged out</p>;
  }
}

export default Login;
