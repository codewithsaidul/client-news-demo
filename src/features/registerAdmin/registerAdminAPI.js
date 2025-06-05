import { apiSlice } from "../Api/apiSlice";

export const registerAdminAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerAdmin: builder.mutation({
      query: (adminData) => ({
        url: "/api/registerAdmin",
        method: "POST",
        body: adminData,
      }),
      // Optimistic update — add the news item immediately in cache
      async onQueryStarted(adminData, { dispatch, queryFulfilled }) {
        // Generate temp ID for the optimistic item
        const tempId = `temp-${Math.random().toString(36).substr(2, 9)}`;

        // Update cached getAllNews queries optimistically
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getAllUsers", undefined, (draft) => {
            // Add new item at the start of the list (like unshift)
            draft.unshift({
              ...adminData,
              _id: tempId,
              createdAt: new Date().toISOString(),
            });
          })
        );

        try {
          const { data: newNews } = await queryFulfilled;

          // Replace temp item with real item from server response
          dispatch(
            apiSlice.util.updateQueryData("getAllUsers", undefined, (draft) => {
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
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const { useRegisterAdminMutation } = registerAdminAPI;
