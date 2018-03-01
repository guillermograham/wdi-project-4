import React from 'react';



const CardsList = ({ handleCardChange, handleCardSubmit, handleCardDelete, deck, newCard, errors }) => {
  return(
    <div>
      <div>
        { deck.cards && deck.cards.map((card, i) =>
          <div key={ i } className="columns is-mobile">
            <div className="column">
              <p>{card.question}</p>
            </div>
            <div className="column">
              <p>{card.answer}</p>
            </div>
            <div className="column is-one-fifth">
              <button className="delete" onClick={ () => handleCardDelete(i) }>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleCardSubmit}>
        <div className="columns is-mobile">
          <div className="column">
            <input
              type="text"
              className="input"
              id="question"
              name="question"
              placeholder="Question"
              value={newCard.question}
              onChange={handleCardChange}
            />
          </div>
          <div className="column">
            <input
              type="text"
              className="input"
              id="answer"
              name="answer"
              placeholder="Answer"
              value={newCard.answer}
              onChange={handleCardChange}
            />
          </div>
          <div className="column is-one-fifth">
            <button className="button is-primary">+</button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default CardsList;
