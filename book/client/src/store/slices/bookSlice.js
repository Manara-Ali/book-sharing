import { createSlice } from "@reduxjs/toolkit";
import {fetchBooks, fetchBook} from "../index";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        data: [],
        book: {},
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.data = action.payload.books;
        });

        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.book = action.payload.book;
        });
    }
});

export const booksCombinedReducer = bookSlice.reducer;