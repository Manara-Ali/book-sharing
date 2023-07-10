import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBook = createAsyncThunk(
  "book/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios({
        url: `/api/v1/books/${id}`,
        // url: `https://books-jx67.onrender.com/api/v1/books/${id}`, // LIVE SITE
        method: "GET",
        // withCredentials: true,
      });

      const { data } = response.data;

      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);