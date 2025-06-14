import React from "react";
import { useState } from "react";
import "./BookSearch.css";

export default function BookSearch({ searchResults }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemCountPerPage = 20;
  const startingIndex = currentPage * itemCountPerPage;
  const endIndex = startingIndex + itemCountPerPage;
  const showingItems = searchResults?.docs?.slice(startingIndex, endIndex);

  return (
    <div>
      <div className="Container">
        {showingItems &&
          showingItems.map((res) =>
            res.cover_i ? (
              <div className="pageResults">
                <img
                  className="cover"
                  key={res.id}
                  src={`https://covers.openlibrary.org/b/ID/${res.cover_i}-M.jpg`}
                  alt={res.title}
                />
                {/* <h3> {res.title}</h3> */}
                {/* <h3>Author: {res.author_name}</h3> */}
                {console.log("res.cover_i", res.cover_i)}
                {console.log("typeof res.cover_i", typeof res.cover_i)}
              </div>
            ) : null
          )}
      </div>
      <div>
        <button
          className="btn btn-light"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
        >
          Previous
        </button>
        <button
          className="btn btn-light"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      <button onClick={() => setCurrentPage(0)}>0</button>
      <h3>{currentPage} </h3>
    </div>
  );
}
