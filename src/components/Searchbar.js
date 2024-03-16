import React from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <>
      <div className="search-container">
        <div className="search-content">
          <b>Ask me</b> - e.g:GreAI/What is the best way to look like sympatic?
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="GreAI/" />
        <button type="submit">
          <FaSearch style={{ width: "24px", height: "18px" }} />
        </button>
      </div>
    </>
  );
}

export default Searchbar;
