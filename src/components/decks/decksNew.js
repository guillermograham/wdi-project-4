import React, { Component } from 'react';
import Axios from 'axios';

import DecksForm from './DecksForm';
import CardsList from './CardsList';
import Auth from '../../lib/Auth';

class DecksNew extends Component {
  state = {
    deck: {
      name: '',
      language: '',
      cards: []
    },
    newCard: {
      question: '',
      answer: ''
    },
    errors: {}
  }

  handleChange = ({ target: { name, value }}) => {
    const deck = Object.assign({}, this.state.deck, { [name]: value});
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ deck, errors });
  }

  handleSubmit = e => {
    e.preventDefault();

    Axios
      .post('/api/decks', this.state.deck, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  handleCardChange = ({ target: { name, value }}) => {
    const newCard = Object.assign({}, this.state.newCard, { [name]: value});
    this.setState({ newCard });
  }

  handleCardSubmit = (e) => {
    e.preventDefault();
    const deck = Object.assign({}, this.state.deck, { cards: this.state.deck.cards.concat(this.state.newCard)});
    this.setState({deck, newCard: { question: '', answer: ''} }, () => console.log(this.state));
  }

  handleCardDelete = (index) => {
    const array = this.state.deck.cards.filter((_, i) => i !== index);
    const deck = Object.assign({}, this.state.deck, { cards: array});
    this.setState({ deck });
  }

  render() {

    const formIsInvalid = Object.keys(this.state.errors).some(key => this.state.errors[key]);

    return(
      <div>
        <DecksForm
          handleChange ={this.handleChange}
          // handleSubmit = { this.handleSubmit }
          deck ={this.state.deck}
          errors={this.state.errors}
        />
        <CardsList
          handleCardChange={this.handleCardChange}
          handleCardSubmit={this.handleCardSubmit}
          handleCardDelete={this.handleCardDelete}
          deck={this.state.deck}
          newCard={this.state.newCard}
          errors={this.state.errors}
        />
        <div>
          <button disabled={formIsInvalid} className="button is-primary" onClick={this.handleSubmit}>Save</button>
        </div>
      </div>
    );
  }
}

export default DecksNew;
