import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

export const taskSlice = createSlice({
  // it is this name that is exported as tasksReducer automatically?
  name: "tasks",
  // need to initialize
  initialState,
  reducers: {
    saveTask: (state, action) => {
      state.taskList.push(action.payload);
    },

    setCheck: (state, action) => {
      state.taskList.forEach((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },

    updateTask: (state, action) => {},

    deleteTask: (state, action) => {},
  },
});

// each case under reducers becomes an action:
export const { saveTask, setCheck, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

//to read datat we need useSelector to return the state of the name(tasks).value(taskList)
export const selectTaskList = (state) => state.tasks.taskList;
