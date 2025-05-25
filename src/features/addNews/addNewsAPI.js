import { apiSlice } from "../Api/apiSlice";


export const addNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNews: builder.mutation({
      query: (newsData) => ({
        url: "/api/addNews",
        method: "POST",
        body: newsData,
      }),
    }),
  }),
});

export const { useAddNewsMutation } = addNewsAPI;
