import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';
// import { Link } from 'react-router-dom';

import BackButton from '../utility/BackButton';

class DecksShow extends Component {
  state = {
    deck: {
      name: '',
      language: '',
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
        console.log(res.data);
        console.log('state',this.state);
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




        <div className="box cover">
          <h3>{this.state.deck.name}</h3>
          <div className="level deck-information">
            <div className="">
              <p><i className="far fa-flag"></i> {this.state.deck.language}</p>
            </div>
            <div className="">
              { this.state.deck.favourites && <div>
                { this.state.deck.favourites.length !== 1 && <p><i className="far fa-star"></i> {this.state.deck.favourites.length} favourites</p>}
                { this.state.deck.favourites.length === 1 && <p><i className="far fa-star"></i> {this.state.deck.favourites.length} favourite</p>}
              </div>}
            </div>
          </div>
          <div className="level deck-buttons">
            <div className="">
              <BackButton />
            </div>
            {this.state.deck.favourites && Auth.getPayload().userId !== this.state.deck.createdBy && <div>
              {/* {this.state.deck.favourites && Auth.getPayload().userId !== this.state.deck.createdBy && <div> */}
              { !this.hasFavourited() &&  <button onClick={this.favouriteDeck} className="show-buttons">Favourite</button>}
              { this.hasFavourited() && <button onClick={this.unFavouriteDeck} className="show-buttons">Unfavourite</button>}
              {/* </div> } */}
            </div>}
            { Auth.getPayload().userId === this.state.deck.createdBy && <div className="">
              <Link to={`/decks/${this.props.match.params.id}/edit`} className="button is-link is-outlined edit-button show-buttons"><i className="fas fa-edit"></i> Edit</Link>
            </div>}
            { Auth.getPayload().userId === this.state.deck.createdBy && <div className="">
              <button onClick={this.deleteDeck} className="button is-danger delete-button is-outlined show-buttons"><i className="far fa-trash-alt"></i> Delete</button>
            </div>}
          </div>
        {this.state.deck.cards && <div>
          { this.state.deck.cards.length > this.state.currentIndex && <div>
            <div className="box flashcard">
              <h3 className="animated zoomIn">{this.state.deck.cards[this.state.currentIndex].question}</h3>
            </div>

            <div className="box flashcard">
              { this.state.showAnswer && <div>
                <h3 className="animated flipInX">{this.state.deck.cards[this.state.currentIndex].answer}</h3>
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
        { this.state.deck.cards.length === this.state.currentIndex && this.state.currentIndex > 0 && <div className="end-message">
          <p className="end-message animated tada">Congratulations!</p>
        </div>}
        { this.state.deck.cards.length === 0 && <div>
          <p className="end-message animated bounceIn">There are no cards in this deck</p>
          { Auth.getPayload().userId === this.state.deck.createdBy && <Link to={`/decks/${this.props.match.params.id}/edit`} className="button is-link">Add cards</Link>}
        </div>}
      </div>
      </div>
    );
  }
}

export default DecksShow;
