import React, { Component } from 'react';
import Axios from 'axios';

import DecksForm from './DecksForm';

class DecksNew extends Component {
  state = {
    deck: {
      name: '',
      image: '',
      level: '',
      language: '',
      cards: [],
      newCard: {
        question: '',
        answer: ''
      }
    }
  }

  handleChange = ({ target: { name, value }}) => {
    const deck = Object.assign({}, this.state.deck, { [name]: value});
    this.setState({ deck });
  }

  handleSubmit = e => {
    e.preventDefault();

    Axios
      .post('/api/decks', this.state.deck)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <DecksForm
        handleChange = { this.handleChange }
        handleSubmit = { this.handleSubmit }
        deck = { this.state.deck }
      />
    );
  }
}

export default DecksNew;
