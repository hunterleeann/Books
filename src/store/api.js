import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const libraryApi = createApi({
  reducerPath: "libraryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org",
  }),
  endpoints: () => ({}),
});
