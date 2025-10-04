import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "../../types/auth";

const initialState: TAuthState = {
  user: null,
  isAppLoading: true,
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
  },
});

export const { setUser, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
