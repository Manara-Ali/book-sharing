import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logoutUser = createAsyncThunk("user/logout", async () => {
  const response = await axios({
    url: "/api/v1/users/logout",
    // url: "https://books-jx67.onrender.com/api/v1/users/logout", // LIVE SITE
    method: "GET",
    withCredentials: true,
  });

  // console.log(response);

  return {};
});