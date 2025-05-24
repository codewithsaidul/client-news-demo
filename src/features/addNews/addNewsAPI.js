import { apiSlice } from "../Api/apiSlice";



export const addNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNews: builder.mutation({
      query: () => ({
        url: "/api/addNews"
      })
    }),
  }),
});
