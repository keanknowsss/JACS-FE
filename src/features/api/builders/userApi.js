import { apiSlice } from "../apiSlice";

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (user) => ({
				url: "/register",
				method: "POST",
				body: user,
			}),
			invalidatesTags: ["USER"],
		}),
		updateUser: builder.mutation({
			query: (user, id) => ({
				url: `/users/${id}`,
				method: "PUT",
				body: user,
			}),
			invalidatesTags: ["USER"],
		}),
	}),
});

export const { useRegisterUserMutation, useUpdateUserMutation } = userApi;
