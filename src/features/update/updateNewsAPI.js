import { apiSlice } from "../Api/apiSlice";




export const updateNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateNews: builder.mutation({
      query: ({ id, newsData}) => ({
        url: `/api/updateNews/${id}`,
        method: "PATCH",
        body: newsData,
      }),
    }),
  }),
});



export const { useUpdateNewsMutation } = updateNewsAPI