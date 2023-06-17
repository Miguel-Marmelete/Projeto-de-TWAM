import { Link, useSearchParams } from "react-router-dom";
import { useRef, useState } from "react";
import logo from "../assets/logoImage.jpg";
function Navbar() {
  const queryString = new URLSearchParams(window.location.search);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchParams({ movieName: inputValue });
    queryString.set("movieName", searchParams);
    setInputValue("");
  };

  return (
    <div className="navbar_container">
      <div className="logo">
        <Link to={`/`}>Logo</Link>
      </div>
      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search Movie"
          className="navbar_search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className="navbar_search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <button className="watchlist_button">
        <Link to={`/watchlist`}>Watchlist</Link>
      </button>
    </div>
  );
}

export default Navbar;
