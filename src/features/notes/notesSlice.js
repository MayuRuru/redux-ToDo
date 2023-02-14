import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "The new preferred way of implementing Redux",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    topics: {
      cleanCode: 0,
      fundamentals: 0,
      TDD: 0,
      techRadar: 0,
      insightful: 0,
    },
  },
  {
    id: "2",
    title: "Starting a TDD course",
    content: "A MUST for clean code",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    topics: {
      cleanCode: 0,
      fundamentals: 0,
      TDD: 0,
      techRadar: 0,
      insightful: 0,
    },
  },
];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    noteAdded: {
      reducer(state, action, userId) {
        state.push(action.payload);
      },
      // prepare callback function to separate logic from component:
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            topics: {
              cleanCode: 0,
              fundamentals: 0,
              TDD: 0,
              techRadar: 0,
              insightful: 0,
            },
          },
        };
      },
    },
    topicAdded(state, action) {
      const { noteId, reaction } = action.payload;
      const existingNote = state.find((note) => note.id === noteId);
      if (existingNote) {
        existingNote.topics[reaction]++;
      }
    },
  },
});

export default notesSlice.reducer;

export const selectNotesList = (state) => state.notes;

export const { noteAdded, topicAdded } = notesSlice.actions;

/* //getSelector creates these selectors we can destructure and rename
export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteIds
  // Pass in a selector that returns the notesSlice of state
} = notesAdapter.getSelectors(state => state.notes) */
