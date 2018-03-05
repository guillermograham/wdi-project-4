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
    console.log('PROPS: ', this.props);
    Axios
      .get(`/api/users/${this.props.match.params.userId}`)
      .then(res => this.setState({ user: res.data }, () => {
        console.log(this.state.user);
        console.log(res);
      }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h2 className="title is-4 profile-title">My decks:</h2>
        <div className="container grid profile user-profile">
          { this.state.user.myDecks && this.state.user.myDecks.map((deck) =>
            <Card
              deck={deck}
              key={deck.id}
            />
          )}
        </div>

        <h2 className="title is-4">My favourites:</h2>
        <div className="container profile user-profile">
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
