import { apiMiddleware } from "../apiMiddleware";

export const sellerApi = apiMiddleware.injectEndpoints({
	endpoints: (builder) => ({
		// sellers
		addSeller: builder.mutation({
			query: (seller) => ({
				url: "/sellers",
				method: "POST",
				body: seller
			}),
			invalidatesTags: ["SELLER"]
		}),
		getSeller: builder.query({
			query: (id) => `/sellers/${id}`,
			providesTags: ["SELLER"]
		}),
		getSellerDetail: builder.query({
			query: (id) => `/sellers/${id}/details`,
			providesTags: ["SELLER_DETAIL"]
		}),
		updateSellerDetail: builder.mutation({
			query: ({ id, updatedDetails }) => ({
				url: `/sellers/${id}/details`,
				method: "PUT",
				body: updatedDetails
			}),
			invalidatesTags: ["SELLER_DETAIL"]
		}),
		addSellerProfilePicture: builder.mutation({
			query: ({ id, images }) => {
				const body = new FormData();
				body.append("images", images, images.name);

				return {
					url: `/sellers/images/${id}`,
					method: "POST",
					headers: {},
					body
				};
			},
			invalidatesTags: ["SELLER"]
		}),
		addSellerDocuments: builder.mutation({
			query: ({ id, file1, file2 }) => {
				const body = new FormData();
				body.append("documents", file1, file1.name);
				body.append("documents", file2, file2.name);

				return {
					url: `/sellers/documents/${id}`,
					method: "POST",
					headers: {},
					body: body
				};
			},
			invalidatesTags: ["SELLER"]
		}),
		verifySeller: builder.mutation({
			query: (id) => {
				return {
					url: `confirmSeller/${id}`,
					method: "PUT",
					headers: {},
					body: {}
				};
			}
		}),
		addSellerDetails: builder.mutation({
			query: (details) => {
				const body = {
					_userId: details.userId,
					storeName: details.name,
					contactNo: details.num,
					email: details.email
				};

				console.log("Details: ", body);

				return {
					url: `/sellers/details`,
					method: "POST",
					headers: {},
					body: body
				};
			}
		})
	})
});

export const {
	useAddSellerMutation,
	useGetSellerQuery,
	useGetSellerDetailQuery,
	useUpdateSellerDetailMutation,
	useVerifySellerMutation,
	useAddSellerDetailsMutation,
	useAddSellerProfilePictureMutation,
	useAddSellerDocumentsMutation
} = sellerApi;

export const { getSeller, getSellerDetail } = sellerApi.endpoints;
