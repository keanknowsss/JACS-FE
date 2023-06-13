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

        getCart: builder.query({
            query: (id) => `cart/${id}`,
            providesTags: ["CART"]
        }),

        updateCart: builder.mutation({
            query: ({id, products}) => {
                // console.log(id)
                // console.log(products)
                return {
                    url: `/cart/${id}`,
                    method: "PUT",
                    body: {
                        products: products
                    }
                }
            }
        })
    })
})

export const {
    useAddCartMutation,
    useUpdateCartMutation,
    useGetCartQuery,
} = cartApi;

export const {
    getCart
} = cartApi.endpoints;