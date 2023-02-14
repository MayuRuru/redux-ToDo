import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
import notesReducer from "../features/notes/notesSlice";
import usersReducer from "../features/users/usersSlice";
import { apiSlice } from "../features/api/apiSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    //[apiSlice.reducerPath]: apiSlice.reducer,
    notes: notesReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// TO USE RTK QUERY WITH STORE WE NEED A MIDDLEWARE!
