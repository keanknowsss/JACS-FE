import { apiMiddleware } from "../apiMiddleware";

export const userApi = apiMiddleware.injectEndpoints({
	endpoints: (builder) => ({
		// user
		login: builder.mutation({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: credentials,
			}),
		}),
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
		// details
		addUserDetails: builder.mutation({
			query: (userDetails) => ({
				url: "/users/details",
				method: "POST",
				body: userDetails
			})
		}),
		getUserDetail: builder.query({
			query: (id) => `/users/${id}/details`,
			providesTags: ["USER_DETAILS"]
		})
	}),
});

export const {
	useLoginMutation,
	useRegisterUserMutation,
	useUpdateUserMutation,
	useAddUserDetailsMutation,
	useGetUserDetailQuery
} = userApi;
