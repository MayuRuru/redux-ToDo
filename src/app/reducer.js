//import { ADD_TASK, DELETE_TASK } from "./actionTypes";

import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_TASK:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.description);

    case actions.COMPLETE_TASK:
      return state.map((task) =>
        task.id !== actions.payload.id ? task : { ...task, resolved: true }
      );

    default:
      return state;
  }
}
