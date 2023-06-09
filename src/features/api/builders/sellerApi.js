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
            providesTags: ["SELLER"],
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
                    body: body,
                };
            },
            invalidatesTags: ["SELLER"],
        }),
        verifySeller: builder.mutation({
            query: (id) => {
                return {
                    url: `confirmSeller/${id}`,
                    method: "PUT",
                    headers: {},
                    body: {}
                }
            }
        }),
        addSellerDetails: builder.mutation({
            query: (details) => {
                const body = {
                    _userId: details.userId,
                    storeName: details.name,
                    contactNo: details.num,
                    email: details.email
                }

                console.log("Details: ",body)

                return {
                    url: `/sellers/details`,
                    method: "POST",
                    headers: {},
                    body: body
                }
            }
        })
    }),
});

export const {
    useAddSellerMutation,
    useGetSellerQuery,
    useAddSellerDocumentsMutation,
    useVerifySellerMutation,
    useAddSellerDetailsMutation
} = sellerApi;

export const { getSeller } = sellerApi.endpoints;
