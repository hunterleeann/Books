import { useState } from "react";
import "./App.css";
import BookSearch from "./components/BookSearch/BookSearch";
import GetSearchTerm from "./components/BookSearch/GetSearchTerm";

function App() {
  return (
    <>
      <div>
        <GetSearchTerm />
        <BookSearch />
      </div>
    </>
  );
}

export default App;
