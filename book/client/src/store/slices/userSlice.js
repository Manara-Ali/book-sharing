import { createSlice } from "@reduxjs/toolkit";
import {
  signupUser,
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
  },
});

export const usersCombinedReducer = usersSlice.reducer;
