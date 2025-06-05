import React from 'react' 
import { useState } from 'react'

export default function BookSearch({searchResults}) { 

// const {data: searchResults, isSuccess} = useGetSearchResultsQuery(searchTerm); 
// const [searchTerm, setSearchTerm] = useState(); 



  return (
    <div>
      <h3>{searchResults}</h3>
    </div>
  )
}
