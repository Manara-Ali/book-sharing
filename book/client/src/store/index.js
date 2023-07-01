import { configureStore } from "@reduxjs/toolkit";
import { createBook } from "./thunks/createBook";
import { fetchBooks } from "./thunks/fetchBooks";
import { fetchBook } from "./thunks/fetchBook";
import { signupUser } from "./thunks/signupUser";
import { loginUser } from "./thunks/loginUser";
import { logoutUser } from "./thunks/logoutUser";
import { booksCombinedReducer } from "./slices/bookSlice";
import { formCombinedReducer } from "./slices/formSlice";
import { usersCombinedReducer } from "./slices/userSlice";
import { 
    enteredName,
    enteredEmail,
    enteredPassword,
    enteredPasswordConfirm,
    enteredTitle,
    enteredGenre,
    enteredAuthor,
    enteredNumPages,
    enteredNumChapters,
    enteredSynopsis,
    enteredExplaination,
    enteredThoughts,
    enteredRating,
    enteredRecommendation,
} from "./slices/formSlice";

export const store = configureStore({
    reducer: {
        booksCombinedReducer,
        formCombinedReducer,
        usersCombinedReducer,
    }
});

export {
    createBook,
    fetchBooks,
    fetchBook,
    signupUser,
    loginUser,
    logoutUser,
    enteredName,
    enteredEmail,
    enteredPassword,
    enteredPasswordConfirm,
    enteredTitle,
    enteredGenre,
    enteredAuthor,
    enteredNumPages,
    enteredNumChapters,
    enteredSynopsis,
    enteredExplaination,
    enteredThoughts,
    enteredRating,
    enteredRecommendation,
}