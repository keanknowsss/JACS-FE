import { apiMiddleware } from "../apiMiddleware";

export const sellerApi = apiMiddleware.injectEndpoints({
    endpoints: (builder) => ({
        // sellers
        addSeller: builder.mutation({
            query: (seller) => ({
                url: "/sellers",
                method: "POST",
                body: seller,
            }),
            invalidatesTags: ["SELLER"],
        }),
        getSeller: builder.query({
            query: (id) => `/sellers/${id}`,
            providesTags: ["SELLER"]
        }),
        addSellerDocuments: builder.mutation({
            query: ({id, file1, file2}) => {

                const body = new FormData()
                body.append("documents", file1, file1.name)
                body.append("documents", file2, file2.name)

                return {
                    url: `/sellers/documents/${id}`,
                    method: "POST",
                    headers: {},
                    body: body,
                }
            },
            invalidatesTags: ["SELLER"],
        })
    })
});


export const {
    useAddSellerMutation,
    useGetSellerQuery,
    useAddSellerDocumentsMutation,
} = sellerApi;

export const { getSeller } = sellerApi.endpoints;