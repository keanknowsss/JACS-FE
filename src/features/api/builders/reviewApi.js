import { apiMiddleware } from "../apiMiddleware";

export const reviewApi = apiMiddleware.injectEndpoints({
    endpoints: (builder) => ({
        // products
        getAllReviewsOfRef: builder.query({
            query: (id, params) => {
                return {
                    url: `/reviews/${id}`,
                    params: {...params},
                };
            },
            providesTags: (result, error, arg) => {
                // console.log(result.result.docs);
                return [
                        { type: "Review", id: "LIST"},
                        ...result.result.docs.map(id => ({type: "Review", id}))
                ];
            },
        }),

        getReview: builder.query({
            query: (id) => `/reviews/${id}/stats`,
            providesTags: ["REVIEW"]
        }),
        
        getReviewStatistics: builder.query({
            query: (id) => `/reviews/${id}/stats`,
            providesTags: ["REVIEW"]
        })
    })
});

export const {
    useGetAllReviewsOfRefQuery,
    useGetReviewQuery,
    useGetReviewStatisticsQuery,
} = reviewApi;

export const {
    getAllReviewsOfRef,
    getReview,
    getReviewStatistics,
} = reviewApi.endpoints;