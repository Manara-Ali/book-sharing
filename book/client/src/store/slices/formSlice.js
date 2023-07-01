import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser } from "..";

const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    },
    reducers: {
        enteredName(state, action) {
            state.name = action.payload;
        },
        enteredEmail(state, action) {
            state.email = action.payload;
        },
        enteredPassword(state, action) {
            state.password = action.payload;
        },
        enteredPasswordConfirm(state, action) {
            state.passwordConfirm = action.payload;
        },
        enteredCurrentPassword(state, action) {
            state.currentPassword = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.name = "";
            state.email = "";
            state.password = "";
            state.passwordConfirm = "";
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.email = "";
            state.password = "";
        });
    }
});

// Create action creators
export const {
    enteredName,
    enteredEmail,
    enteredPassword,
    enteredPasswordConfirm,
} = formSlice.actions;

// Creation combined reducers
export const formCombinedReducer = formSlice.reducer;