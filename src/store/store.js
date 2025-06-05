import { configureStore } from "@reduxjs/toolkit";
import { libraryApi } from "./api";

export const store = configureStore({
  reducer: {
    [libraryApi.reducerPath]: libraryApi.reducer,
//  gallery: GallerySlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(libraryApi.middleware),
});

