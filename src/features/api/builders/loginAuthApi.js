import { apiSlice } from "../apiSlice";

export const loginAuthApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useLoginMutation } = loginAuthApi;
