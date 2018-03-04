import React from 'react';

import { Link } from 'react-router-dom';

const Card = ({ deck }) => {
  return(
    <div className="card" key={deck.id}>
      <Link to={`/decks/${deck.id}`}>
        <div className="card-content">
          <h3 className="title is-4">{deck.name}</h3>
          <img className="flag" src={`../../../assets/images/flags/${deck.language}.svg`} alt={`${deck.language} flag`} title={`${deck.language} flag`} />
          <p><i className="far fa-flag"></i> {deck.language}</p>
          { deck.favourites && <div>
            { deck.favourites.length !== 1 && <p><i className="far fa-star"></i> {deck.favourites.length} favourites</p>}
            { deck.favourites.length === 1 && <p><i className="far fa-star"></i> {deck.favourites.length} favourite</p>}
          </div>}
        </div>
      </Link>
    </div>
  );
};

export default Card;
