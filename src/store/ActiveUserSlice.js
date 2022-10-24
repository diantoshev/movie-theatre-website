import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "activeUser/login",
  ({ username, password }) => {
    debugger;
    return fetch(`https://itt-voting-api.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
);

const initialState = {
  username: "",
  password: "",
  fullName: "",
  isAdmin: false,
  isLogged: false,
  sessionId: "",
  userLoading: false,
};
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
      state.sessionId = payload.sessionId;
      state.isLogged = state.sessionId ? true : false;
      state.userLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.userLoading = false;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.userLoading = true;
    });
  },
});

export const { changeUserData } = activeUserSlice.actions;

export default activeUserSlice.reducer;
