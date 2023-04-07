import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    //login
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSucces: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
  },
});

export const { loginStart, loginSucces, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
