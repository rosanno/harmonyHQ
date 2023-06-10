import { configureStore } from "@reduxjs/toolkit";
import { shazamApi } from "../services/api";

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});
