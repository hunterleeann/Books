import React from 'react' 
import { useEffect, useState } from 'react';
import { useGetSearchResultsQuery } from './BookSearchSlice'
import BookSearch from './BookSearch';
  
export default function GetSearchTerm() { 

    const [searchTerm, setSearchTerm] = useState(); 
    const {data: searchResults, isSuccess} = useGetSearchResultsQuery(searchTerm); 

    const [form, setForm] = useState({ search: "" });
    const [searchRes, setSearchRes] = useState();

    useEffect(() => {
        if(isSuccess){
            setSearchRes(searchResults); 
            console.log("test: ", searchResults); 
        }
    }, [isSuccess, searchResults])
    
      const submit = (e) => {
        e.preventDefault();
        setSearchTerm(form.search);
        console.log("searchTerm ", searchTerm); 
        <BookSearch searchResults={searchResults}/>
      };
    
      const change = (e) => {
        setForm((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }; 

  return (
    <div>
     <form onSubmit={submit}>
        <label>
          Search:
          <input
            type="text"
            name="search"
            value={form.search}
            onChange={change}
          />
        </label>
        <input type="submit" value="submit" />
      </form> 
      {/* <BookSearch searchResults={searchResults}/> */}
    </div>
  )
}
