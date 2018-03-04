import React from 'react';



const DecksForm = ({ handleChange, handleSubmit, deck, errors }) => {
  return(
    <form onSubmit={handleSubmit} className="col-md-6">
      <div className="control">
        <input
          type="text"
          className="input"
          id="name"
          name="name"
          placeholder="Name"
          value={deck.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      {/* <div className="control">
        <input
          type="text"
          className="input"
          id="language"
          name="language"
          placeholder="Language"
          value={deck.language}
          onChange={handleChange}
        />
        {errors.language && <div>{errors.language}</div>}
      </div> */}
      <div className="control">
        <div className="select">
          <select
            id="language"
            name="language"
            value={deck.language}
            onChange={handleChange}
          >
            <option value="" disabled>Please select a language</option>
            <option>English</option>
            <option>French</option>
            <option>German</option>
            <option>Italian</option>
            <option>Portuguese</option>
            <option>Romanian</option>
            <option>Russian</option>
            <option>Spanish</option>
          </select>
          {errors.language && <div className="error">{errors.language}</div>}
        </div>
      </div>
      {/* <div>
        <button className="button is-primary">Save</button>
      </div> */}
    </form>
  );
};


export default DecksForm;
