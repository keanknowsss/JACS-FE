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
		getUser: builder.query({
			query: (id) => `/users/${id}`,
			providesTags: ["USER"],
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
				body: userDetails,
			}),
		}),
		updateUserDetail: builder.mutation({
			query: ({ id, editedDetails }) => ({
				url: `/users/${id}/details`,
				method: "PUT",
				body: editedDetails,
			}),
			invalidatesTags: ["USER_DETAILS"],
		}),
		getUserDetail: builder.query({
			query: (id) => `/users/${id}/details`,
			providesTags: ["USER_DETAILS"],
		}),
		addUserProfilePicture: builder.mutation({
			query: ({ id, images }) => {
				const body = new FormData();
				body.append("images", images, images.name);

				return {
					url: `/users/images/${id}`,
					method: "POST",
					headers: {},
					body: body,
				};
			},
			invalidatesTags: ["USER"],
		}),
	}),
});

export const {
	useLoginMutation,
	useGetUserQuery,
	useRegisterUserMutation,
	useUpdateUserMutation,
	useAddUserDetailsMutation,
	useGetUserDetailQuery,
	useAddUserProfilePictureMutation,
	useUpdateUserDetailMutation,
} = userApi;

export const { getUser, getUserDetail } = userApi.endpoints;
