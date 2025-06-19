import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem("userInfo") ? 
    JSON.parse(localStorage.getItem("userInfo")) : null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
            
            // Correct expiration calculation
            const expirationTime = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
            localStorage.setItem("expirationTime", expirationTime.toISOString()); // store as ISO
          },
          

        logout: (state) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo");
            localStorage.removeItem("expirationTime");
        }
    }
});

export const {setCredentials, logout}= authSlice.actions;
export default authSlice.reducer; 