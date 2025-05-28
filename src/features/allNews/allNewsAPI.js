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
      providesTags: (result) =>
        result
          ? [
              // tag each news item by its id
              ...result.data.map(({ _id }) => ({ type: "News", id: _id })),
              // also tag the whole list (important for refetching the whole page)
              { type: "News", id: "LIST" },
            ]
          : [{ type: "News", id: "LIST" }],
    }),
  }),
});

export const { useGetAllNewsQuery } = allNewsAPI;
