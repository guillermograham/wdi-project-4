import React from 'react';
import Axios from 'axios';

import LoginForm from './LoginForm';

import Auth from '../../lib/Auth';

class Login extends React.Component {

  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/login', this.state.user)
      .then((res) => {
        console.log(res);
        Auth.setToken(res.data.token);
        this.props.history.push(`/users/${Auth.getPayload().userId}`);
      })
      .catch(err => this.setState({ errors: { message: err.response.data.message} }, () => {
        console.log(err);
        console.log(this.state);
      }));
  }

  render() {
    return (
      <LoginForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Login;
