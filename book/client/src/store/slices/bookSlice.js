import { createSlice } from "@reduxjs/toolkit";
import {fetchBooks, fetchBook, createBook} from "../index";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        data: [],
        book: {},
        status: "",
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.data = action.payload.books;
            state.status = "";
        });

        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.book = action.payload.book;
        });

        builder.addCase(createBook.fulfilled, (state, action) => {
            // CHECK THIS LINE OF CODE!!!!!
            console.log(action.payload);
            state.status = action.payload.status;
          });
    }
});

export const booksCombinedReducer = bookSlice.reducer;