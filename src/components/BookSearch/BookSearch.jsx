import React from "react";
import { useState } from "react";
import "./BookSearch.css";

export default function BookSearch({ searchResults }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemCountPerPage = 10;
  const startingIndex = currentPage * itemCountPerPage;
  const endIndex = startingIndex + itemCountPerPage;
  const showingItems = searchResults?.docs?.slice(startingIndex, endIndex);

  return (
    <div>
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
      <h3>Page: {currentPage} </h3>
      <div>
        {showingItems &&
          showingItems.map((res) => (
            <div className="pageResults"> 
               <img
                className="cover"
                src={`https://covers.openlibrary.org/b/ID/${res.cover_i}-M.jpg`}
                alt={res.title}
              />
              <h3>Title: {res.title}</h3>
              <h3>Author: {res.author_name}</h3>
              {/* <h3>cover: {res.cover_i}</h3> */}
              {console.log("res.cover_i", res.cover_i)}
              {console.log("typeof res.cover_i", typeof res.cover_i)}
            </div>
          ))}
      </div>
    </div>
  );
}
