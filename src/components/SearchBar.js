import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Tìm kiếm Lego..."
        className="search-input"
      />
      <button className="search-button">Tìm kiếm</button>
    </div>
  );
}

export default SearchBar;
