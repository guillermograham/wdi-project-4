<div className="columns is-multiline is-centered is-mobile is-3">
  { decks.map(deck =>
    <div className="card column is-one-quarter is-half-tablet is-four-fifths-mobile" key={deck.id}>
      <Link to={`/decks/${deck.id}`}>
        <h3 className="title is-4">{deck.name}</h3>
        <img className="flag" src="https://openclipart.org/image/360px/svg_to_png/250015/BevelledFrance.png&disposition=attachment" alt="France flag (bevelled)" title="France flag (bevelled) by  Firkin ( https://openclipart.org/user-detail/Firkin )" />
        <p><i className="far fa-flag"></i> {deck.language}</p>
        { deck.favourites.length !== 1 && <p><i className="far fa-star"></i> {deck.favourites.length} favourites</p>}
        { deck.favourites.length === 1 && <p><i className="far fa-star"></i> {deck.favourites.length} favourite</p>}
        {/* <div className="card-image">
          <figure className="image is-480x480">
            <img src="https://openclipart.org/image/360px/svg_to_png/250015/BevelledFrance.png&disposition=attachment" alt="France flag (bevelled)" title="France flag (bevelled) by  Firkin ( https://openclipart.org/user-detail/Firkin )" />                  </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{deck.name}</p>
          <p>Language: {deck.language}</p>
          { deck.favourites && <p>Favourites: {deck.favourites.length}</p>}
        </div> */}
      </Link>
    </div>
  )}
</div>

<div className="card" key={deck.id}>
  <Link to={`/decks/${deck.id}`}>
    <div className="card-content">
      <h3 className="title is-4">{deck.name}</h3>
      <img className="flag" src={`../../../assets/images/flags/${deck.language}.svg`} alt="France flag (bevelled)" title="France flag (bevelled) by  Firkin ( https://openclipart.org/user-detail/Firkin )" />
      <p><i className="far fa-flag"></i> {deck.language}</p>
      { deck.favourites.length !== 1 && <p><i className="far fa-star"></i> {deck.favourites.length} favourites</p>}
      { deck.favourites.length === 1 && <p><i className="far fa-star"></i> {deck.favourites.length} favourite</p>}
    </div>
  </Link>
</div>



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
