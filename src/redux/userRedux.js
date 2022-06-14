import {createSlice} from "@reduxjs/toolkit";

const userRedux = createSlice({
        name: "user",
        initialState: {
                currentUser: null,
                isFetching: false,
                error: false,
                success: false
        },
        reducers: {
             loginStart: (state)=> {
                     state.isFetching=true
             },
             loginSuccess: (state,action)=> {
                     state.isFetching=false
                     state.currentUser=action.payload
             },
             loginError: (state)=> {
                     state.isFetching=false
                     state.error=true
             },
             logout: (state) => {
                state.currentUser = null;
             },
            registerStart: (state) => {
                 state.isFetching=true
            },
            registerSuccess: (state,action) => {
                 state.isFetching=false
                state.success=true
                state.currentUser = action.payload
            },
            registerError: (state) => {
                 state.isFetching=false
                 state.error=true
            }

        }
})

export const {loginStart,loginSuccess,loginError,logout,registerStart,registerSuccess,registerError} = userRedux.actions
export default userRedux.reducer;