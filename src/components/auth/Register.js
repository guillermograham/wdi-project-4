import React from 'react';
import Axios from 'axios';

import RegisterForm from './RegisterForm';

class Register extends React.Component {

  state = {
    user: {
      username: '',
      email: '',
      image: '',
      password: '',
      passwordConfirmation: ''
    }
  };

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/register', this.state.user)
      .then((res) => {
        console.log(res);
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Register;
