import { apiSlice } from "../Api/apiSlice";



export const deleteNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `/api/removeNews/${id}`,
        method: "DELETE"
      })
    }),
  }),
});



export const { useDeleteNewsMutation } = deleteNewsAPI;