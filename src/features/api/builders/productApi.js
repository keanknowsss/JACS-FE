import { apiMiddleware } from "../apiMiddleware";

export const productApi = apiMiddleware.injectEndpoints({
    endpoints: (builder) => ({
        // products
        getAllProducts: builder.query({
            query: (params) => {
                return {
                    url: `/products`,
                    params: {...params},
                };
            },
            providesTags: (result, error, arg) => {
                // console.log(result.result.docs);
                return [
                        { type: "Product", id: "LIST"},
                        ...result.result.docs.map(id => ({type: "Product", id}))
                ];
            },
        })
        // getAllProductsFromSeller: builder.query({
        //     query: (sellerId) => `/products/store/${sellerId}`,
        //     providesTags: ["PRODUCT"]
        // }),
        // getProduct: builder.query({
        //     query: (id) => `/products/${id}`,
        //     providesTags: ["PRODUCT"]
        // }),
        // addProduct: builder.mutation({
        //     query: (product) => ({
        //         url: "/products",
        //         method: "POST",
        //         body: product,
        //     }),
        //     invalidatesTags: ["PRODUCT"]
        // }),
        // updateProduct: builder.mutation({
        //     query: (product, id) => ({
        //         url: `/products/${id}`,
        //         method: "PUT",
        //         body: product,
        //     }),
        //     invalidatesTags: ["PRODUCT"]
        // }),
        // deleteProduct: builder.mutation({
        //     query: (ids) => ({
        //         url: `/products`,
        //         method: "DELETE",
        //         body: ids
        //     }),
        //     invalidatesTags: ["PRODUCT"]
        // }),

        // // Add documents & files
        // addProductImages: builder.mutation({
        //     query: (images, productId) => ({
        //         //form-data, TODO: Add implementation
        //     }),
        //     invalidatesTags: ["PRODUCT"]
        // }),
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

        // //Product specifications
        // getProductSpecifications: builder.query({
        //     query: (productId) => `/products/${productId}/specifications`,
        //     providesTags: ["SPECIFICATION"]
        // }),
        // addProductSpecifications: builder.mutation({
        //     query: (productId, specifications) => ({
        //         url: `/products/${productId}/specifications`,
        //         method: "POST",
        //         body: specifications,
        //     }),
        //     invalidatesTags: ["SPECIFICATION"]
        // }),
        // updateProductSpecifications: builder.mutation({
        //     query: (productId, specifications) => ({
        //         url: `/products/${productId}/specifications`,
        //         method: "PUT",
        //         body: specifications,
        //     }),
        //     invalidatesTags: ["SPECIFICATION"]
        // })
    })
});

export const {
    useGetAllProductsQuery,
} = productApi;

export const {
    getAllProducts,
} = productApi.endpoints;