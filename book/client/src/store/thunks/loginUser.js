import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
      console.log(userData)
    try {
      const response = await axios({
        // url: "/api/v1/users/login",
        url: "https://books-jx67.onrender.com/api/v1/users/login", // LIVE SITE
        method: "POST",
        data: userData,
      });

      console.log(response);

      const { data } = response.data;

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);