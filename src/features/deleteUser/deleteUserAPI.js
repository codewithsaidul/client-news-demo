import { apiSlice } from "../Api/apiSlice";

export const deleteUserAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/deleteUser/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Users", id }, // the deleted Users item tag
        { type: "Users", id: "LIST" }, // the overall Users list tag
      ],
    }),
  }),
});

export const { useDeleteUserMutation } = deleteUserAPI;
