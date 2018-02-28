import React, { Component } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';

import BackButton from '../utility/BackButton';

class DecksShow extends Component {
  state = {
    deck: {
      cards: []
    },
    currentIndex: 0,
    showAnswer: false
  }

  deleteDeck = () => {
    Axios
      .delete(`/api/decks/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/decks/${this.props.match.params.id}`)
      .then(res => this.setState({ deck: res.data }, () => {
        console.log(this.state);
      }))
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
    return(
      <div>
        <BackButton />
        {this.state.deck.cards && <div>
          { this.state.deck.cards.length > this.state.currentIndex && <div>
            <p>{this.state.deck.cards[this.state.currentIndex].question}</p>
            { this.state.showAnswer && <div>
              <p>{this.state.deck.cards[this.state.currentIndex].answer}</p>
              <div>
                <button
                  onClick={this.correctAnswer}
                >Correct
                </button>
                <button
                  onClick={this.incorrectAnswer}
                >Incorrect
                </button>
                <br/>
              </div>
            </div>}

            { !this.state.showAnswer && <button onClick={this.showAnswer}>
              Reveal
            </button>}
          </div>}
        </div>}
        { this.state.deck.cards.length === this.state.currentIndex && <div>
          <p>Congratulations!</p>
        </div>}
      </div>
    );
  }
}

export default DecksShow;
