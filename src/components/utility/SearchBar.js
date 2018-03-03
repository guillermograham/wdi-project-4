import React from 'react';

const SearchBar = ({ handleSort, handleSearch, handleLanguageFilter }) => {
  return(
    <div className="columns is-mobile">
      <div className="column is-one-third">
        <div className="select" onChange={handleLanguageFilter}>
          <select>
            <option value="">All languages</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Romanian">Romanian</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="select" onChange={handleSort}>
          <select>
            <option value="favourites|asc">Favourites (High - Low)</option>
            <option value="favourites|desc">Favourites (Low - High)</option>
            <option value="name|asc">Name (A - Z)</option>
            <option value="name|desc">Name (Z - A)</option>
          </select>
        </div>
      </div>
      <div className="column is-one-third">
        <input className="input" type="text" placeholder="&#xF002;" onChange={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
