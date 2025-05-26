import { apiSlice } from "../Api/apiSlice";




export const singleNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleNews: builder.query({
      query: (id) => `/api/allNews/${id}`
    }),
  }),
});


export const { useGetSingleNewsQuery } = singleNewsAPI
