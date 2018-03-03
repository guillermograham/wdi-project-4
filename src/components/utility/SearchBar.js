import React from 'react';

const SearchBar = ({ handleSort, handleSearch, handleLanguageFilter }) => {
  return(
    <div className="level">
      <div className="level-item is-tablet">
        <div className="select" onChange={handleLanguageFilter}>
          <select className="search-items">
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
      <div className="level-item is-tablet">
        <div className="select" onChange={handleSort}>
          <select className="search-items">
            <option value="favourites|desc">Favourites (High - Low)</option>
            <option value="favourites|asc">Favourites (Low - High)</option>
            <option value="name|asc">Name (A - Z)</option>
            <option value="name|desc">Name (Z - A)</option>
          </select>
        </div>
      </div>
      <div className="level-item is-tablet">
        <input className="input search-items" type="text" placeholder="&#xF002;" onChange={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
