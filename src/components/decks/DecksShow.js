import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';
// import { Link } from 'react-router-dom';

import BackButton from '../utility/BackButton';

class DecksShow extends Component {
  state = {
    deck: {
      cards: [],
      favourites: []
    },
    currentIndex: 0,
    showAnswer: false
  }

  deleteDeck = () => {
    Axios
      .delete(`/api/decks/${this.props.match.params.id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/decks/${this.props.match.params.id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ deck: res.data }, () => {
        console.log('state',this.state);
        console.log(res.data);
        console.log(Auth.getPayload());
      }))
      .catch(err => console.log(err));
  }

  hasFavourited = () => {
    return this.state.deck.favourites.some((user) => {
      return user.id === Auth.getPayload().userId;
    });
  }

  favouriteDeck = () => {
    Axios
      .post(`/api/decks/${this.props.match.params.id}/favourite`, {}, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => {
        const newFavourites = this.state.deck.favourites.slice();
        newFavourites.push(res.data);
        console.log('res.data.id: ', res.data.id);
        console.log('this.state.deck.favourites: ', this.state.deck.favourites);
        const deck = Object.assign({}, this.state.deck, { favourites: newFavourites});
        this.setState({ deck }, () => {
          console.log('this.state.deck afterwards: ', this.state.deck);
        });
      })
      .catch(err => console.log(err));
  }

  unFavouriteDeck = () => {
    Axios
      .post(`/api/decks/${this.props.match.params.id}/favourite`, {}, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => {
        const newFavourites = this.state.deck.favourites.slice();
        const index = newFavourites.indexOf(res.data.id);
        newFavourites.splice(index, 1);
        const deck = Object.assign({}, this.state.deck, { favourites: newFavourites});
        this.setState({ deck }, () => {
          console.log('this.state.deck afterwards: ', this.state.deck);
        });
      })
      .catch(err => console.log(err));
  }

  showAnswer = () => {
    this.setState({ showAnswer: true });
  }

  correctAnswer = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1, showAnswer: false }, () => {
      console.log('cards: ', this.state.deck.cards.length, 'currentIndex: ', this.state.currentIndex);
    });
  }

  incorrectAnswer = () => {
    const index = this.state.currentIndex;
    const newArray = this.state.deck.cards.slice();
    newArray.push(this.state.deck.cards[index]);
    console.log(newArray);
    this.setState({ deck: { cards: newArray }, currentIndex: this.state.currentIndex + 1, showAnswer: false }, () => {
      console.log('cards: ', this.state.deck.cards.length, 'currentIndex: ', this.state.currentIndex);
    });
  }

  render() {

    // const button = !this.hasFavourited() ? <button onClick={this.favouriteDeck}>Favourite</button> : <button onClick={this.unFavouriteDeck}>Unfavourite</button>;

    return(
      <div>
        { !this.hasFavourited() && <button onClick={this.favouriteDeck}>Favourite</button>}
        { this.hasFavourited() && <button onClick={this.unFavouriteDeck}>Unfavourite</button>}
        <BackButton />
        <Link to={`/decks/${this.props.match.params.id}/edit`} className="button is-link">Edit</Link>
        <div className="box cover">
        {this.state.deck.cards && <div>
          { this.state.deck.cards.length > this.state.currentIndex && <div>
            <div className="box flashcard">
              <h3>{this.state.deck.cards[this.state.currentIndex].question}</h3>
            </div>

            <div className="box flashcard">
              { this.state.showAnswer && <div>
                <h3>{this.state.deck.cards[this.state.currentIndex].answer}</h3>
              </div>}
            </div>

            <div className="box flashcard buttons">



                { !this.state.showAnswer && <button onClick={this.showAnswer} className="answer-button button is-primary">
                  Reveal
                </button>}


                { this.state.showAnswer && <div>
                  <button
                    onClick={this.correctAnswer}
                    className="answer-button button is-success"
                  ><i className="fas fa-check"></i> Correct
                  </button>
                  <button
                    onClick={this.incorrectAnswer}
                    className="answer-button button is-danger"
                  ><i className="fas fa-times" aria-hidden="true"></i> Incorrect
                  </button>
                </div>}

            </div>






          </div>}
        </div>}
        { this.state.deck.cards.length === this.state.currentIndex && <div>
          <p>Congratulations!</p>
        </div>}
      </div>
      </div>
    );
  }
}

export default DecksShow;
