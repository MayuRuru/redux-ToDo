import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  // We need to add a tag to specify which mutations
  // invalidate the previous cached results
  // so it automatically fetched new data
  tagTypes: ["Task"],

  endpoints: (builder) => ({
    /*  getTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Task"],
    }), */
  }),
});
