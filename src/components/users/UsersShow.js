import React, { Component } from 'react';
import Axios from 'axios';

import Card from '../utility/Card';

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
      .then(res => this.setState({ user: res.data }))
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
        {(this.state.user.myDecks.length === 0) && <div>
          <p className="profile-message">You currently have no decks.</p>
        </div>}

        <h2 className="title is-4">My favourites:</h2>
        <div className="container profile user-profile">
          { this.state.user && this.state.user.favourites.map((deck) =>
            <Card
              deck={deck}
              key={deck.id}
            />
          )}
        </div>
        {(this.state.user.favourites.length === 0) && <div>
          <p className="profile-message">You currently have no favourited decks.</p>
        </div>}
      </div>
    );
  }
}

export default UsersShow;
