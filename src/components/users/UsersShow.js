import React, { Component } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import Card from '../utility/Card';

// import BackButton from '../utility/BackButton';

class UsersShow extends Component {
  state = {
    user: {
      favourites: [],
      myDecks: []
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
        <h2>My decks:</h2>
        <div className="container grid">
          { this.state.user.myDecks && this.state.user.myDecks.map((deck) =>
            <Card
              deck={deck}
              key={deck.id}
            />
          )}
        </div>

        <h2>My favourites:</h2>
        <div className="container grid">
          { this.state.user && this.state.user.favourites.map((deck) =>
            <Card
              deck={deck}
              key={deck.id}
            />
          )}
        </div>
      </div>
    );
  }
}

export default UsersShow;
