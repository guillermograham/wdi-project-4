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
        {errors.name && <small>{errors.name}</small>}
      </div>
      <div className="control">
        <input
          type="text"
          className="input"
          id="language"
          name="language"
          placeholder="Language"
          value={deck.language}
          onChange={handleChange}
        />
        {errors.language && <small>{errors.language}</small>}
      </div>
      <div className="control">
        <div className="select">
          <select
            id="level"
            name="level"
            value={deck.level}
            onChange={handleChange}
          >
            <option value="" disabled>Please select difficuly level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          {errors.level && <small>{errors.level}</small>}
        </div>
      </div>
      {/* <div>
        <button className="button is-primary">Save</button>
      </div> */}
    </form>
  );
};


export default DecksForm;
