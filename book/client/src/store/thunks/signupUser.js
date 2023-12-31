import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "user/signup",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios({
        url: "/api/v1/users/signup",
        // url: "https://books-jx67.onrender.com/api/v1/users/signup", // LIVE SITE
        method: "POST",
        data: user,
        // withCredentials: true,
      });

      const { data } = response.data;

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);