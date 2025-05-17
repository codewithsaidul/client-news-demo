import { apiSlice } from "../Api/apiSlice";


export const allNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => "/api/allNews"
    }),
  }),
});

export const { useGetAllNewsQuery } = allNewsAPI;