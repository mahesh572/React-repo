import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

    name: "authentication",
    initialState: {"isAuthenticated": false},
    reducers: {
        authUpdate: (state,action)=>{
          //  console.log("action payload id......",action.payload)
            state.isAuthenticated = action.payload
        }
    }
});

export const { authUpdate } = authSlice.actions
export default authSlice.reducer