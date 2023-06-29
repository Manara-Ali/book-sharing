import { createSlice } from "@reduxjs/toolkit";
import {fetchBooks} from "../index";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
});

export const booksCombinedReducer = bookSlice.reducer;