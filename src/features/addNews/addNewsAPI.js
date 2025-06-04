import { apiSlice } from "../Api/apiSlice";

export const addNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNews: builder.mutation({
      query: (newsData) => ({
        url: "/api/addNews",
        method: "POST",
        body: newsData,
      }),
      // Optimistic update — add the news item immediately in cache
      async onQueryStarted(newsData, { dispatch, queryFulfilled }) {
        // Generate temp ID for the optimistic item
        const tempId = `temp-${Math.random().toString(36).substr(2, 9)}`;

        // Update cached getAllNews queries optimistically
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getAllNews", undefined, (draft) => {
            // Add new item at the start of the list (like unshift)
            draft.data.unshift({
              ...newsData,
              _id: tempId,
              createdAt: new Date().toISOString(),
            });
          })
        );

        try {
          const { data: newNews } = await queryFulfilled;

          // Replace temp item with real item from server response
          dispatch(
            apiSlice.util.updateQueryData("getAllNews", undefined, (draft) => {
              const index = draft.data.findIndex((item) => item._id === tempId);
              if (index !== -1) draft.data[index] = newNews;
            })
          );
        } catch {
          // Undo optimistic update on error
          patchResult.undo();
        }
      },
      // Invalidate the news list tag to refetch all queries after mutation
      invalidatesTags: [{ type: "News", slug: "LIST" }],
    }),
  }),
});

export const { useAddNewsMutation } = addNewsAPI;
