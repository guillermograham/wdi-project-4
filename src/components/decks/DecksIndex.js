import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class DecksIndex extends Component {

  // using transform-class-properties in Babel, so don't need to define a constructor

  state = {
    decks: []
  }

  componentDidMount() {
    Axios
      .get('/api/decks', { 
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ decks: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <div className="level">
          <button className="button is-primary">
            <Link to="/decks/new">
              <i className="fa fa-plus" aria-hidden="true"></i> Add Deck
            </Link>
          </button>
        </div>
        <div className="columns is-mobile">
          { this.state.decks.map(deck =>
            <div className="card column is-one-quarter" key={deck.id}>
              <Link to={`/decks/${deck.id}`}>
                <div className="card-image">
                  <figure className="image is-480x480">
                    <img src="https://bulma.io/images/placeholders/480x480.png" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">{deck.name}</p>
                  <p>Language: {deck.language}</p>
                  { deck.favourites && <p>Favourites: {deck.favourites}</p>}
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DecksIndex;
