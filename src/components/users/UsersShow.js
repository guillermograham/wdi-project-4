import React, { Component } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';

// import BackButton from '../utility/BackButton';

class UsersShow extends Component {
  state = {
    user: {
      favourites: []
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.userId}`)
      .then(res => this.setState({ user: res.data }, () => {
        console.log(this.state.user);
      }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        { this.state.user && this.state.user.favourites.map((deck, i) =>
          <div key={i}>
            <p>{deck.name}</p>
            <p>{deck.language}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UsersShow;
