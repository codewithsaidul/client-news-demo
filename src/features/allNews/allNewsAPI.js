import { apiSlice } from "../Api/apiSlice";



export const allNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: (page) => `/api/allNews?page=${page}`
    }),
  }),
});




export const { useGetAllNewsQuery } = allNewsAPI;