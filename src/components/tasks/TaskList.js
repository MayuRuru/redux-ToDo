import React from "react";
import "./TaskList.css";
import Input from "./Input";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../features/taskList/taskSlice";

const TaskList = () => {
  const taskList = useSelector(selectTaskList);

  return (
    <div className="tasks_container">
      <div className="taskList_container">
        {taskList.map((item) => (
          <TaskItem name={item.item} done={item.done} id={item.id} />
        ))}
      </div>
      <Input />
    </div>
  );
};

export default TaskList;