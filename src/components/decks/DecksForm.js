import React from 'react';

const DecksForm = ({ handleChange, handleSubmit, deck, errors }) => {
  return(
    <form onSubmit={handleSubmit} className="col-md-6 decks-new-form">
      <div className="control decks-form decks-form-outside">
        <input
          type="text"
          className="input decks-form"
          id="name"
          name="name"
          placeholder="Name"
          value={deck.name}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="error">
        {errors.name && <p className="error-message fadeIn animated">{errors.name}</p>}
      </div>
      <div className="control decks-form decks-form-outside">
        <div className="select decks-form">
          <select
            id="language"
            name="language"
            className="decks-form"
            value={deck.language}
            onChange={handleChange}
          >
            <option value="" className="placeholder" disabled>Please select a language</option>
            <option>English</option>
            <option>French</option>
            <option>German</option>
            <option>Italian</option>
            <option>Portuguese</option>
            <option>Romanian</option>
            <option>Russian</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
      <div className="error">
        {errors.language && <div className="error-message fadeIn animated">{errors.language}</div>}
      </div>
    </form>
  );
};

export default DecksForm;
