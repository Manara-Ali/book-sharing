import { configureStore } from "@reduxjs/toolkit";
import { fetchBooks } from "./thunks/fetchBooks";
import { booksCombinedReducer } from "./slices/bookSlice";
export {fetchBooks}

export const store = configureStore({
    reducer: {
        booksCombinedReducer,
    }
});