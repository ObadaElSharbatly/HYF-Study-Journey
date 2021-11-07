import React from "react";
import "./SearchBar.css";
function SearchBar({ searchValue, setSearchValue, search, setErrMsg }) {
  const handleSearch = (e) => {
    e.preventDefault();
    setErrMsg(null);
    setSearchValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={search}>
        <div className="search-bar-container">
          <i className="bi bi-search"></i>
          <input
            type="text"
            name="search-city"
            placeholder="Write a city name"
            onChange={handleSearch}
            value={searchValue}
          />
        </div>
        <button
          type="submit"
          disabled={searchValue !== "" ? false : true}
        >
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
