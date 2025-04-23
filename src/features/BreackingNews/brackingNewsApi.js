import { apiSlice } from "../Api/apiSlice";


export const breakingNewsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBreakingNews: builder.query({
      query: () => ""
    }),
  }),
});

export const { useGetBreakingNewsQuery } = breakingNewsApi;