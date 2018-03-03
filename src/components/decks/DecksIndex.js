import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Auth from '../../lib/Auth';

class DecksIndex extends Component {

  // using transform-class-properties in Babel, so don't need to define a constructor

  state = {
    decks: [],
    sortBy: 'name',
    sortDirection: ''
  }

  componentDidMount() {
    Axios
      .get('/api/decks', {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ decks: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  }

  render() {
    const { sortBy, sortDirection } = this.state;
    const orderedDecks = _.orderBy(this.state.decks, [sortBy], [sortDirection]);
    return(
      <div>
        <div className="level">

        </div>
        <div className="columns is-multiline is-mobile">
          { this.state.decks.map(deck =>
            <div className="card column is-one-quarter" key={deck.id}>
              <Link to={`/decks/${deck.id}`}>
                <div className="card-image">
                  <figure className="image is-480x480">
                    <img src="https://openclipart.org/image/360px/svg_to_png/250015/BevelledFrance.png&disposition=attachment" alt="France flag (bevelled)" title="France flag (bevelled) by  Firkin ( https://openclipart.org/user-detail/Firkin )" />                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">{deck.name}</p>
                  <p>Language: {deck.language}</p>
                  { deck.favourites && <p>Favourites: {deck.favourites.length}</p>}
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
