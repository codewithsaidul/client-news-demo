import { apiSlice } from "../Api/apiSlice";

export const deleteNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `/api/removeNews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "News", id }, // the deleted news item tag
        { type: "News", id: "LIST" }, // the overall news list tag
      ],
    }),
  }),
});

export const { useDeleteNewsMutation } = deleteNewsAPI;
