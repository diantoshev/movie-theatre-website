import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserManager from "../models/UserManager";

const initialState = {
  fullName: "",
  isAdmin: false,
  isLogged: false,
  sessionId: "",
  userLoading: false,
  errorLogin: "",
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
      // newUserManager.loginAdmin(username);
      return res.json();
    });
  }
);

export const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {
    clearError: (state, action) => {
      state.errorLogin = action.payload.errorLogin;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      if (payload.sessionId) {
        return {
          ...state,
          sessionId: payload.sessionId,
          isLogged: true,
          userLoading: false,
          errorLogin: false,
          isAdmin: newUserManager.isAdminUser,
        };
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
