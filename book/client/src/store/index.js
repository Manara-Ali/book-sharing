import { configureStore } from "@reduxjs/toolkit";
import { fetchBooks } from "./thunks/fetchBooks";
import { fetchBook } from "./thunks/fetchBook";
import { booksCombinedReducer } from "./slices/bookSlice";
export {fetchBooks, fetchBook}

export const store = configureStore({
    reducer: {
        booksCombinedReducer,
    }
});