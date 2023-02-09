import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  //status: "idle",
};

export const tasksSlice = createSlice({
  // createSlice will automatically generate action creators
  // that correspond to each case reducer function we provide
  // automatically returns the existing state in the default case
  // allows us to safely "mutate" our state!

  name: "tasks",

  // need to initialize:
  initialState,

  reducers: {
    taskAdded(state, action) {
      const task = action.payload;
      state.taskList[task.id] = task;
      state.taskList.push(action.payload);
    },

    checkChanged(state, action) {
      const taskId = action.payload;
      const task = state.taskList[taskId];

      // const task = state.taskList.find((task) => task.id === action.payload);
      task.done = !task.done;

      /*  state.taskList.forEach((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      }); */
    },

    tasksLoading(state, action) {
      // reducers can only make copies of the original values,
      // and then they can mutate the copies:
      /*   return {
        ...state,
        status: "loading",
      }; */
      state.status = "loading";
    },

    tasksLoaded(state, action) {
      const newTaskList = {};
      action.payload.forEach((task) => {
        newTaskList[task.id] = task;
      });
      state.taskList = newTaskList;
      state.status = "idle";
    },

    taskUpdated(state, action) {},

    taskDeleted(state, action) {
      // can mix "mutating" and "immutable" code inside of Immer:
      // state.tasks = state.tasks.filter((task) => task.id !== action.payload);

      // we can use the JS delete operator to remove items from our normalized state.
      delete state.taskList[action.payload];
    },
  },
});

// each case under reducers becomes an action:
export const { taskAdded, checkChanged, taskDeleted } = tasksSlice.actions;

export default tasksSlice.reducer;

//to read data we need useSelector to return the state of the name(tasks).value(taskList)
export const selectTaskList = (state) => state.tasks.taskList;
