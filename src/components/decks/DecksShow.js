import React, { Component } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';

import BackButton from '../utility/BackButton';

class DecksShow extends Component {
  state = {
    deck: {}
  }

  // have to be anonymous functions
  deleteDeck = () => {
    Axios
      .delete(`/api/decks/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      // all classical components have props - defined in constructor
      .get(`/api/decks/${this.props.match.params.id}`)
      .then(res => this.setState({ deck: res.data }, () => {
        console.log(this.state);
      }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="row">
        <div className="page-banner col-md-12">
          <BackButton />
        </div>
        <div className="col-md-6">
          <h3>{ this.state.deck.name }</h3>
          <h4>{ this.state.deck.language }</h4>
          <button className="standard-button">
            <Link to={`/decks/${this.state.deck.id}/edit`} >
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit
            </Link>
          </button>
          <button className="main-button" onClick={ this.deleteDeck }>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>
        </div>
      </div>
    );
  }
}

// can be written before "class DecksShow.. "
export default DecksShow;
