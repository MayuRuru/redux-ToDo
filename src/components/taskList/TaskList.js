import React from "react";
import "./App.css";
import Input from "./Input";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../features/taskList/taskSlice";

export const TaskList = () => {
  const taskList = useSelector(selectTaskList);

  return (
    <div className="app_container">
      <div className="tasks_container">
        {taskList.map((item) => (
          <TaskItem name={item.item} done={item.done} id={item.id} />
        ))}
      </div>
      <Input />
    </div>
  );
};
