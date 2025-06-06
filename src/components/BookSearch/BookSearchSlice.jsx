import { createSlice } from "@reduxjs/toolkit"; 
import { libraryApi } from "../../store/api"; 

const LibraryApi = libraryApi.injectEndpoints({
    endpoints: (builder) => ({
        getSearchResults: builder.query({
            query: (searchTerm) => ({
                url: `/search.json?q=${searchTerm}`, 
                method: "GET", 
            }),
            providesTag: ["Books"],
        }),
        getCovers: builder.query({
            query: (value) => ({
                url: `/b/isbn/${value}-S.jpg`, 
                method: "GET", 
            }),
            providesTag: ["Books"],
        })
        
    })
    
})

const bookSlice = createSlice({
    name: "Books",
    initialState: {},
    reducers: {},
    //   extraReducers: (builder) => {
    //     builder.addMatcher(museumApi.endpoints.addUser.matchFulfilled);
    //   },
  });
  
  export default bookSlice.reducer;
  
  export const { useGetSearchResultsQuery, useGetCoversQuery,  } =
  libraryApi;
  