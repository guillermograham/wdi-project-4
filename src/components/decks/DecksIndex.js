import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Auth from '../../lib/Auth';
import SearchBar from '../utility/SearchBar';

class DecksIndex extends Component {

  // using transform-class-properties in Babel, so don't need to define a constructor

  state = {
    decks: [],
    sortBy: 'favourites',
    sortDirection: 'desc',
    query: '',
    languageFilter: ''
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

  handleSearch = (e) => {
    this.setState({ query: e.target.value });
  }

  handleLanguageFilter = (e) => {
    this.setState({ languageFilter: e.target.value }, () => console.log(this.state));
  }

  render() {
    const { sortBy, sortDirection, query, languageFilter } = this.state;
    const regex = new RegExp(query, 'i');
    const languageRegex = new RegExp(languageFilter);

    const orderedDecks = _.orderBy(this.state.decks, [sortBy], [sortDirection]);
    const searchFilteredDecks = _.filter(orderedDecks, (deck) => regex.test(deck.name));
    const decks = _.filter(searchFilteredDecks, (deck) => languageRegex.test(deck.language));

    return(
      <div>
        <SearchBar
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
          handleLanguageFilter={this.handleLanguageFilter}
        />
        <div className="container grid">
          { decks.map(deck =>
            <div className="card" key={deck.id}>
              <Link to={`/decks/${deck.id}`}>
              <div className="card-content">
                <h3 className="title is-4">{deck.name}</h3>
                <img className="flag" src={`../../../assets/images/flags/${deck.language}.svg`} alt="France flag (bevelled)" title="France flag (bevelled) by  Firkin ( https://openclipart.org/user-detail/Firkin )" />
                <p><i className="far fa-flag"></i> {deck.language}</p>
                { deck.favourites.length !== 1 && <p><i className="far fa-star"></i> {deck.favourites.length} favourites</p>}
                { deck.favourites.length === 1 && <p><i className="far fa-star"></i> {deck.favourites.length} favourite</p>}
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
