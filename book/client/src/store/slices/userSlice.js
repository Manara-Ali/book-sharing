import { createSlice } from "@reduxjs/toolkit";
import {
  signupUser,
  loginUser,
  logoutUser,
  fetchBooks,
  fetchBook,
} from "../index";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
    });

    builder.addCase(logoutUser.fulfilled, (state, action) => {
        state.user = action.payload;
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
        state.user = action.payload.loggedInUser;
      });
  
    builder.addCase(fetchBook.fulfilled, (state, action) => {
    state.user = action.payload.loggedInUser;
    });
  },
});

export const usersCombinedReducer = usersSlice.reducer;
