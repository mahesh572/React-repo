import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer  from './authenticateSlice'

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer
    }
})