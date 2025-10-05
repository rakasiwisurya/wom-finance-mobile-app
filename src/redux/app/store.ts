import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authSlice";
import { movieReducer } from "../features/movieSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
