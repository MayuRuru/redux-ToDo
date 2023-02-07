import * as actions from "./actionTypes";

export const taskAdded = (description) => ({
  type: actions.ADD_TASK,
  payload: {
    description,
  },
});

export const taskCompleted = (id) => ({
  type: actions.COMPLETE_TASK,
  payload: {
    id,
  },
});
