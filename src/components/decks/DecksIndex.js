import React, { Component } from 'react';
import Axios from 'axios';
import _ from 'lodash';

import Auth from '../../lib/Auth';
import SearchBar from '../utility/SearchBar';
import Card from '../utility/Card';

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
        <div className="grid box profile">
          { decks.map(deck =>
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

export default DecksIndex;
