import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "The new preferred way of implementing Redux",
  },
  {
    id: "2",
    title: "Starting a TDD course",
    content: "A MUST for clean code",
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
            userId,
          },
        };
      },
    },
  },
});

export default notesSlice.reducer;

export const selectNotesList = (state) => state.notes;

export const { noteAdded } = notesSlice.actions;
