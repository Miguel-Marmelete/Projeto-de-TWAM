import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const queryString = new URLSearchParams(window.location.search);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchParams({ movieName: inputValue });
    queryString.set("movieName", searchParams);
    setInputValue("");
  };
  const handlePermissions = () => {
    var userInput = prompt("Please enter moderator token:");
    if (userInput !== null) {
      const moderator_token = localStorage.getItem("moderator_token");
      if (moderator_token === userInput) {
        localStorage.setItem("moderator", "true");
        alert("You are now a moderator");
      } else {
        alert("Wrong token, try again");
      }
    }
  };

  return (
    <div className="navbar_container">
      <div className="logo">
        <Link to={`/`} style={{ color: "#000", textDecoration: "none" }}>
          Logo
        </Link>
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
      <div>
        <button className="navbar_rate-button" onClick={handlePermissions}>
          Mod
        </button>
        <button className="watchlist_button">
          <Link
            to="/watchlist"
            style={{ color: "#FFF", textDecoration: "none" }}
          >
            Watchlist
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
