import React from 'react';



const CardsList = ({ handleCardChange, handleCardSubmit, handleCardDelete, deck, newCard }) => {

  const buttonIsInvalid = !(newCard.question && newCard.answer);

  return(
    <div>
      <div>
        { deck.cards && deck.cards.map((card, i) =>
          <div key={ i } className="cards-list">
            <div className="">
              <p>{card.question}</p>
            </div>
            <div className="">
              <p>{card.answer}</p>
            </div>
            <div className="">
              <button className="delete" onClick={ () => handleCardDelete(i) }>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
      <form className="decks-form-outside" onSubmit={handleCardSubmit}>
        <div className="cards-list">
          <div className="new-card-form">
            <input
              type="text"
              className="input new-card"
              id="question"
              name="question"
              placeholder="Question"
              value={newCard.question}
              onChange={handleCardChange}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="input new-card"
              id="answer"
              name="answer"
              placeholder="Answer"
              value={newCard.answer}
              onChange={handleCardChange}
            />
          </div>
          <div className="control">
            <button className="add-button" disabled={buttonIsInvalid}><i className="fas fa-plus"></i></button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default CardsList;
