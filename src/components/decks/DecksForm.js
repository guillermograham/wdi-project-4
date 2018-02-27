import React from 'react';



const DecksForm = ({ handleChange, handleSubmit, deck }) => {
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
        </div>
      </div>
      {/* <div>
        <button className="button is-primary">Save</button>
      </div> */}
    </form>
  );
};


export default DecksForm;
