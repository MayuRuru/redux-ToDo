import {
  createSlice,
  nanoid,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { sub } from "date-fns";
import { apiSlice } from "../api/apiSlice";

const notesAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date - a.date,
});

const initialState = notesAdapter.getInitialState();

// export default notesSlice.reducer;

// export const selectNotesList = (state) => state.notes;

// export const { noteAdded, topicAdded } = notesSlice.actions;

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "/notes",
      // db.json doesn't have reactions so if they don't have it we attach it
      transformResponse: (responseData) => {
        let min = 1;
        const loadedNotes = responseData.map((note) => {
          if (!note?.date)
            note.date = sub(new Date(), { minutes: min++ }).toISOString();

          if (!note?.topics)
            note.topics = {
              cleanCode: 0,
              fundamentals: 0,
              TDD: 0,
              techRadar: 0,
              insightful: 0,
            };
          return note;
        });
        // normalize the data (array of ids and entities ids):
        return notesAdapter.setAll(initialState, loadedNotes);
      },
      providesTags: (result, error, arg) => [
        // separate array into separate ids
        { type: "Note", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Note", id })),
      ],
    }),
    getNotesByUserId: builder.query({
      query: (id) => `/notes/?userId=${id}`,
      transformResponse: (responseData) => {
        let min = 1;
        const loadedNotes = responseData.map((note) => {
          if (!note?.date)
            note.date = sub(new Date(), { minutes: min++ }).toISOString();

          if (!note?.topics)
            note.topics = {
              cleanCode: 0,
              fundamentals: 0,
              TDD: 0,
              techRadar: 0,
              insightful: 0,
            };
          return note;
        });
        // normalize the data state (array of ids and entities ids):
        return notesAdapter.setAll(initialState, loadedNotes);
      },
      providesTags: (result, error, arg) => {
        return [...result.ids.map((id) => ({ type: "Note", id }))];
      },
    }),
    addNewNote: builder.mutation({
      query: (initialNote) => ({
        url: "/notes",
        method: "POST",
        body: {
          ...initialNote,
          userId: initialNote.userId,
          date: new Date().toISOString,
          topics: {
            cleanCode: 0,
            fundamentals: 0,
            TDD: 0,
            techRadar: 0,
            insightful: 0,
          },
        },
      }),
      invalidatesTags: [{ type: "Note", id: "LIST" }],
    }),
    updateNote: builder.mutation({
      query: (initialNote) => ({
        url: `/notes/${initialNote.id}`,
        method: "PUT",
        body: {
          ...initialNote,
          date: new Date().toISOString,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Note", id: arg.id }],
    }),
    deleteNote: builder.mutation({
      query: ({ id }) => ({
        url: `/notes/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Note", id: arg.id }],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useGetNotesByUserIdQuery,
  useAddNewNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = extendedApiSlice;

// returns an object result from query
export const selectNoteResult = extendedApiSlice.endpoints.getNotes.select();

// creates memoized selector
const selectNoteData = createSelector(
  // input function:
  selectNoteResult,
  // output: normalized state object with ids and entities:
  (noteResult) => noteResult.data
);

// getSelector creates these selectors we can destructure and rename
export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteIds,
  // Pass in a selector that returns the notesSlice of state
} = notesAdapter.getSelectors((state) => selectNoteData(state) ?? initialState);
