import { apiMiddleware } from "../apiMiddleware";

export const productApi = apiMiddleware.injectEndpoints({
	endpoints: (builder) => ({
		// products
		getAllProducts: builder.query({
			query: (params) => {
				return {
					url: `/products`,
					params: { ...params }
				};
			},
			providesTags: (result, error, arg) => {
				return [
					{ type: "Product", id: "LIST" },
					...result.result.docs.map((id) => ({ type: "Product", id }))
				];
			}
		}),
		// getAllProductsFromSeller: builder.query({
		//     query: (sellerId) => `/products/store/${sellerId}`,
		//     providesTags: ["PRODUCT"]
		// }),
		getProduct: builder.query({
			query: (id) => `/products/${id}`,
			providesTags: ["PRODUCT"]
		}),
		addProduct: builder.mutation({
			query: (product) => ({
				// product = {_sellerId, name, description, category, price, img, stock}
				url: "/products",
				method: "POST",
				headers: {},
				body: product
			}),
			invalidatesTags: ["PRODUCT"]
		}),
		updateProduct: builder.mutation({
			query: ({ id, body }) => ({
				url: `/products/${id}`,
				method: "PUT",
				body
			}),
			invalidatesTags: ["PRODUCT"]
		}),
		deleteProduct: builder.mutation({
			query: (ids) => ({
				url: `/products`,
				method: "DELETE",
				body: {
					productId: ids
				}
			}),
			invalidatesTags: ["PRODUCT"]
		}),
		getProductBySellerId: builder.query({
			query: ({ sellerId, params }) => ({
				url: `/products/store/${sellerId}`,
				params
			}),
			providesTags: ["PRODUCTS"]
		}),
		// Add documents & files
		addProductImages: builder.mutation({
			query: ({ productId, images }) => {
				const body = new FormData();
				body.append("images", images, images.name);

				return {
					url: `/products/images/${productId}`,
					method: "POST",
					headers: {},
					body
				};
			},
			invalidatesTags: ["PRODUCT"]
		}),
		// deleteProductImages: builder.mutation({
		//     query: (productId, fileUrls) => ({
		//         //TODO: Add implementation
		//     }),
		//     invalidatesTags: ["PRODUCT"]
		// }),
		// addProductDocuments: builder.mutation({
		//     query: (documents, productId) => ({
		//         //form-data, TODO: Add implementation
		//     }),
		//     invalidatesTags: ["PRODUCT"]
		// }),
		// deleteProductDocuments: builder.mutation({
		//     query: (productId, fileUrls) => ({
		//         //TODO: Add implementation
		//     }),
		//     invalidatesTags: ["PRODUCT"]
		// }),

		//Product specifications
		getProductSpecifications: builder.query({
			query: (productId) => `/products/${productId}/specifications`,
			providesTags: ["SPECIFICATION"]
		}),
		addProductSpecifications: builder.mutation({
			query: ({ productId, specification }) => ({
				url: `/products/${productId}/specifications`,
				method: "POST",
				body: specification
			}),
			invalidatesTags: ["SPECIFICATION"]
		}),
		updateProductSpecifications: builder.mutation({
			query: ({ productId, specification }) => ({
				url: `/products/${productId}/specifications`,
				method: "PUT",
				body: specification
			}),
			invalidatesTags: ["SPECIFICATION"]
		})
	})
});

export const {
	useGetAllProductsQuery,
	useGetProductQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation,
	useAddProductImagesMutation,
	useGetProductSpecificationsQuery,
	useAddProductSpecificationsMutation,
	useGetProductBySellerIdQuery,
	useUpdateProductSpecificationsMutation
} = productApi;

export const {
	getAllProducts,
	getProduct,
	getProductSpecifications,
	getProductBySellerId
} = productApi.endpoints;
