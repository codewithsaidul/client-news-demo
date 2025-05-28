import { apiSlice } from "../Api/apiSlice";

export const singleNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleNews: builder.query({
      query: (id) => `/api/allNews/${id}`,
    }),
    providesTags: (result, error, id) => [{ type: "News", id }],
  }),
});

export const { useGetSingleNewsQuery } = singleNewsAPI;
