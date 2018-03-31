import React from 'react';

const CardsList = ({ handleCardChange, handleCardSubmit, handleCardDelete, deck, newCard }) => {

  const buttonIsInvalid = !(newCard.question && newCard.answer);

  return(
    <div>
      <div className="created-cards">
        { deck.cards && deck.cards.map((card, i) =>
          <div key={i} className="card-row fadeIn animated">
            <p className="card-face">{card.question}</p>
            <p className="card-face">{card.answer}</p>
            <button className="delete" onClick={ () => handleCardDelete(i) }></button>
          </div>


          // <div key={ i } className="cards-list fadeIn animated">
          //   <div className="">
          //     <p>{card.question}</p>
          //   </div>
          //   <div className="">
          //     <p>{card.answer}</p>
          //   </div>
          //   <div className="">
          //     <button className="delete" onClick={ () => handleCardDelete(i) }>
          //       Delete
          //     </button>
          //   </div>
          // </div>
        )}
      </div>
      <form className="new-card-submit-form" onSubmit={handleCardSubmit}>
        <div className="new-card-form-row">
          <div className="">
            <input
              type="text"
              className="input question-card-input"
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
              className="input answer-card-input"
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


      {/* <form className="decks-form-outside" onSubmit={handleCardSubmit}>
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
      </form> */}
    </div>
  );
};

export default CardsList;
