import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskList/taskSlice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
