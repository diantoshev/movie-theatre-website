import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  sessionId: "",
  username: "",
  isAdmin: false,
  isLogged: false,
  userLoading: false,
  errorLogin: "",
};

export const loginUser = createAsyncThunk(
  "activeUser/login",
  ({ username, password }, { rejectWithValue }) => {
    return fetch(`https://itt-voting-api.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    }).then((res) => {
      try {
        if (res.ok) {
          localStorage.setItem("activeMovieSpotUser", username);
          return res.json();
        } else {
          localStorage.removeItem("rememberedMovieSpotUser");
          throw new Error("Wrong credentials!");
        }
      } catch (err) {
        return rejectWithValue(err);
      }
    });
  }
);

export const logoutUser = createAsyncThunk(
  "activeUser/logout",
  ({ sessionId }, { rejectWithValue }) => {
    return fetch(`https://itt-voting-api.herokuapp.com/logout`, {
      method: "POST",
      body: JSON.stringify({ id: `${sessionId}` }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    }).then((res) => {
      if (res.ok) {
        if (localStorage.getItem("rememberedMovieSpotUser")) {
          localStorage.removeItem("rememberedMovieSpotUser");
        }
      } else {
      }
    });
  }
);

export const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.sessionId = payload.sessionId;
      state.username = localStorage.getItem("activeMovieSpotUser");
      localStorage.removeItem("activeMovieSpotUser");
      state.isLogged = true;
      state.userLoading = false;
      state.errorLogin = "";
      state.isAdmin = state.username === "Qnko123" ? true : false;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.errorLogin = payload.message;
      state.isLogged = false;
      state.userLoading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.sessionId = "";
      state.username = "";
      state.isLogged = false;
      state.userLoading = false;
      state.errorLogin = "";
      state.isAdmin = false;
    });
  },
});

export const { changeUserData } = activeUserSlice.actions;

export default activeUserSlice.reducer;
