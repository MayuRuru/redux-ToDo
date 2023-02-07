import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: "tasks",
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
  },
});

export const { saveTask, setCheck } = taskSlice.actions;

export const selectTaskList = (state) => state.tasks.taskList;

export default taskSlice.reducer;
