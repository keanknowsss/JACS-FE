import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JACS_BE_API } from "../../constants/env";

const apiBaseQuery = fetchBaseQuery({
    baseUrl: JACS_BE_API,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().loginAuth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    }
})

export const apiSlice = createApi({
    baseQuery: apiBaseQuery,
    endpoints: builder => ({})
});