import React, { Component } from 'react';
import Axios from 'axios';

import DecksForm from './DecksForm';
import Auth from '../../lib/Auth';

class DecksNew extends Component {
  state = {
    deck: {
      name: '',
      image: '',
      level: '',
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
        <div>
          { this.state.deck.cards && this.state.deck.cards.map((card, i) =>
            <div key={ i } className="columns is-mobile">
              <div className="column">
                <p>{card.question}</p>
              </div>
              <div className="column">
                <p>{card.answer}</p>
              </div>
              <div className="column is-one-fifth">
                <button className="delete" onClick={ () => this.handleCardDelete(i) }>
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={this.handleCardSubmit}>
          <div className="columns is-mobile">
            <div className="column">
              <input
                type="text"
                className="input"
                id="question"
                name="question"
                placeholder="Question"
                value={this.state.newCard.question}
                onChange={this.handleCardChange}
              />
            </div>
            <div className="column">
              <input
                type="text"
                className="input"
                id="answer"
                name="answer"
                placeholder="Answer"
                value={this.state.newCard.answer}
                onChange={this.handleCardChange}
              />
            </div>
            <div className="column is-one-fifth">
              <button className="button is-primary"><i class="fas fa-plus"></i></button>
            </div>
          </div>
        </form>
        <div>
          <button disabled={formIsInvalid} className="button is-primary" onClick={this.handleSubmit}>Save</button>
        </div>
      </div>
    );
  }
}

export default DecksNew;
