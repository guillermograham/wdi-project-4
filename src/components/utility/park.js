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
