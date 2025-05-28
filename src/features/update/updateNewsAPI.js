import { apiSlice } from "../Api/apiSlice";

export const updateNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateNews: builder.mutation({
      query: ({ id, newsData }) => ({
        url: `/api/updateNews/${id}`,
        method: "PATCH",
        body: newsData,
      }),
      invalidatesTags: (result, error, {id}) => [
        { type: "News", id }, // the deleted news item tag
        { type: "News", id: "LIST" }, // the overall news list tag
      ],
    }),
  }),
});

export const { useUpdateNewsMutation } = updateNewsAPI;
