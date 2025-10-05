import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "../../types/auth";

const initialState: TAuthState = {
  user: null,
  isAppLoading: true,
  darkMode: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAppLoading = false;
    },
    signOut: (state) => {
      state.user = null;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setUser, signOut, toggleDarkMode } = authSlice.actions;
export const authReducer = authSlice.reducer;
