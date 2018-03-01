import React, { Component } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';

// import BackButton from '../utility/BackButton';

class UsersShow extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>

      </div>
    );
  }
}

export default UsersShow;
