import React, { Component } from 'react';
import Axios from 'axios';

import DecksForm from './DecksForm';

class DecksEdit extends Component {
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
    this.setState({ deck });
  }

  handleSubmit = e => {
    e.preventDefault();

    Axios
      .put(`/api/decks/${this.props.match.params.id}`, this.state.deck)
      .then(() => this.props.history.push(`/decks/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/decks/${this.props.match.params.id}`)
      .then(res => this.setState({ deck: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <DecksForm
        handleChange={ this.handleChange}
        handleSubmit={ this.handleSubmit}
        deck={this.state.deck}
        errors={this.state.errors}
      />
    );
  }
}

export default DecksEdit;
