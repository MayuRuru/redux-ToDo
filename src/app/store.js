import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
import notesReducer from "../features/notes/notesSlice";
import usersReducer from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    notes: notesReducer,
    users: usersReducer,
  },
});
