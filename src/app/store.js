import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
import notesReducer from "../features/notes/notesSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    notes: notesReducer,
  },
});
