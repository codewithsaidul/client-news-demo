


import { apiSlice } from "../Api/apiSlice";

export const currentUsersAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "/api/getCurrentUser"
    }),
  }),
});

export const { useGetCurrentUserQuery } = currentUsersAPI;
