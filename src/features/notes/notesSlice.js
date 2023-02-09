import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export default notesSlice.reducer;
