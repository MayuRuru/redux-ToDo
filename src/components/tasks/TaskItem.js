import { Checkbox } from "@mui/material";
import React from "react";
import "./TaskItem.css";
import { useDispatch } from "react-redux";
import { checkChanged } from "../../features/tasks/tasksSlice";

const TaskItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(checkChanged(id));
  };

  return (
    <div className="taskItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

      <p className={done && "taskItem--done"}>{name}</p>
    </div>
  );
};

export default TaskItem;
