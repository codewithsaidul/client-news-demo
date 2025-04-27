import { apiSlice } from "../Api/apiSlice";


export const latestNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLatestNews: builder.query({
      query: () => "/api/latestNews?sort=desc"
    }),
  }),
});

export const { useGetLatestNewsQuery } = latestNewsAPI;