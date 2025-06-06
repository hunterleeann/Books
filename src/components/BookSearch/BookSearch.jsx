import React from "react";
import { useState } from "react";
import GetCovers from "./GetCovers";
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
        {showingItems &&
          showingItems.map((res) => (
            <div className="pageResults">
              <h3>Title: {res.title}</h3>
              <h3>Author: {res.author_name}</h3>
              {/* <img src={res.cover_i} alt={res.title} /> */}
              {/* <GetCovers key={res.} objectID={objectID} /> */}
            </div>
          ))}
      </div>
      <div>
        <button
          class="btn btn-light"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
        >
          Previous
        </button>
        <button
          class="btn btn-light"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      <h3>Page: {currentPage} </h3>
      {/* <h3>Page: {currentPage && currentPage > 1} </h3>  */}
    </div>
  );
}
