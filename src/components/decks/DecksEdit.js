import React, { Component } from 'react';
import Axios from 'axios';

import DecksForm from './DecksForm';

class DecksEdit extends Component {
  state = {
    deck: {
      title: '',
      image: '',
      category: ''
    }
  }

  // instead of e.target.name and e.target.value

  handleChange = ({ target: { name, value }}) => {
    console.log(name, value);
    // [name] ensures the relevent is updated. Name is on the input box
    const deck = Object.assign({}, this.state.deck, { [name]: value});
    this.setState({ deck });
  }

  handleImageUpload = result => {
    const deck = Object.assign({}, this.state.deck, { image: result.filesUploaded[0].url});
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
        handleImageUpload = {this.handleImageUpload}
        deck={this.state.deck}
      />
    );
  }
}

export default DecksEdit;
