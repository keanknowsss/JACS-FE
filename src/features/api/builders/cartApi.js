import { apiMiddleware } from "../apiMiddleware";

export const cartApi = apiMiddleware.injectEndpoints({
    endpoints: (builder) => ({
        addCart: builder.mutation({
            query: (cart) => {
                console.log("Mutation: ", cart)

                return {
                    url: "/cart",
                    method: "POST",
                    body: cart,
                }
            },
            invalidatesTags: ["CART"],
        }),

        getAllCartOfUser: builder.query({
            query: (params) => {
                return {
                    url: `/cart`,
                    params: { ...params },
                };
            },
            providesTags: (result, error, arg) => {
                // console.log(result.result.docs);
                return [
                    { type: "Cart", id: "LIST" },
                    ...result.result.docs.map(id => ({ type: "Cart", id }))
                ];
            },
        }),
    })
})

export const {
    useAddCartMutation,
    useGetAllCartOfUserQuery
} = cartApi;

export const {
    getAllCartOfUser
} = cartApi.endpoints;