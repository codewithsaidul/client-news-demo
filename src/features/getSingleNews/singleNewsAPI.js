import { apiSlice } from "../Api/apiSlice";

export const singleNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleNews: builder.query({
      query: (slug) => `/api/allNews/${slug}`,
    }),
    providesTags: (result, error, id) => [{ type: "News", id }],
  }),
});

export const { useGetSingleNewsQuery } = singleNewsAPI;
