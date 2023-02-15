import { Checkbox } from "@mui/material";
import React from "react";
import "./TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// old version:
// import { useDispatch } from "react-redux";
// import { checkChanged } from "../../features/tasks/tasksSlice";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  // old version:
  //const dispatch = useDispatch();
  /*   const handleChange = () => {
    dispatch(checkChanged(id));
  };
 */

  const handleChange = () => {
    updateTask({
      ...task,
      done: !task.done,
    });
  };
  return (
    <div className="taskItem">
      <Checkbox
        checked={task.done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <label htmlFor={task.id}>{task.name}</label>
      <p className={task.done && "taskItem--done"}>{task.name}</p>
      <button
        className="trash"
        onClick={() =>
          deleteTask({
            id: task.id,
          })
        }
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TaskItem;
