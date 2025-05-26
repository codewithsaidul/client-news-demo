import { apiSlice } from "../Api/apiSlice";


export const dummyNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDummyNews: builder.query({
      query: () => "/api/dummyNews"
    }),
  }),
});

export const { useGetDummyNewsQuery } = dummyNewsAPI;