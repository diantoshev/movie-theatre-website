import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserManager from "../models/UserManager";

const initialState = {
  username: "",
  password: "",
  fullName: "",
  isAdmin: false,
  isLogged: false,
  sessionId: "",
  userLoading: false,
  errorLogin: false,
};
const newUserManager = new UserManager();
export const loginUser = createAsyncThunk(
  "activeUser/login",
  ({ username, password }) => {
    return fetch(`https://itt-voting-api.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      newUserManager.loginAdmin(username);
      return res.json();
    });
  }
);

export const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {
    changeUserData: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      if (payload.sessionId) {
        state.sessionId = payload.sessionId;
        state.isLogged = true;
        state.userLoading = false;
        state.errorLogin = false;
        state.isAdmin = newUserManager.isAdminUser;

        // localStorage.setItem(
        //   "isLoggedMovieSpotUser",
        //   JSON.stringify(newUserManager.isLoggedMovieSpotUser)
        // );
      } else {
        state.errorLogin = payload.message;
        state.userLoading = false;
      }
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.userLoading = false;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.userLoading = true;
    });
  },
});

export const { changeUserData } = activeUserSlice.actions;

export default activeUserSlice.reducer;
