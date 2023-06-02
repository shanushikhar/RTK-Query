import { configureStore, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});
