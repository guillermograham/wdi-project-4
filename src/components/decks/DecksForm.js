import React from 'react';



const DecksForm = ({ handleChange, handleSubmit, deck }) => {
  return(
    <form onSubmit={handleSubmit} className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Name"
          value={deck.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          placeholder="Image"
          value={deck.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
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
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="language"
          name="language"
          placeholder="Language"
          value={deck.language}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="save-button">Save</button>
      </div>
    </form>
  );
};


export default DecksForm;
