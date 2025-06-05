import { apiSlice } from "@/features/Api/apiSlice";


export const singleNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleNews: builder.query({
      query: (slug) => `/api/news/allNews/${slug}`,
    }),
    providesTags: (result, error, slug) => [{ type: "News", slug }],
  }),
});

export const { useGetSingleNewsQuery } = singleNewsAPI;
