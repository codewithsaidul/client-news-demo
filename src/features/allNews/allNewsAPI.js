import { apiSlice } from "../Api/apiSlice";

export const allNewsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: ({ page = 1, category, priority }) => {
        const params = new URLSearchParams();
        if (page) params.append("page", page.toString());
        if (category) params.append("category", category);
        if (priority) params.append("priority", priority);

        return `/api/allNews?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetAllNewsQuery } = allNewsAPI;
