import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const tasksAdapter = createEntityAdapter();
const initialState = tasksAdapter.getInitialState();

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (responseData) => {
        return tasksAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        { type: "Task", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Task", id })),
      ],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: {
          ...task,
          id: task.id,
        },
      }),
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PATCH",
        body: { task },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Task", id: arg.id }],
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Note", id: arg.id }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApiSlice;

// returns the query result object
export const selectTasksResult = tasksApiSlice.endpoints.getTasks.select();

// Creates memoized selector
const selectTasksData = createSelector(
  selectTasksResult,
  (tasksResult) => tasksResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
  // Pass in a selector that returns the tasks slice of state
} = tasksAdapter.getSelectors(
  (state) => selectTasksData(state) ?? initialState
);
