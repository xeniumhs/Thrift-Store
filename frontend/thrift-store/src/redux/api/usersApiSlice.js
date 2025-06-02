import { apiSlice } from "./apiSlice";
import { USER_URL } from "../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) =>({
        register : builder.mutation({
            query : (userData) => ({
                url : `${USER_URL}/register`,
                method : 'POST',
                body : userData,
            }),
        }),
        login : builder.mutation({
            query : (userData)=>({
                url : `${USER_URL}/login`,
                method : 'POST',
                body : userData,
            })
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
} = usersApiSlice;