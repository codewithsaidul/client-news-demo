import { apiSlice } from "../Api/apiSlice";

export const allUsersAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/getAllUser",
      providesTags: (result) => 
        result.length > 0
          ? [
              ...result.map(({ _id }) => ({ type: "Users", id: _id })),
              // also tag the whole list (important for refetching the whole page)
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const { useGetAllUsersQuery } = allUsersAPI;
