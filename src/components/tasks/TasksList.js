import React from "react";
import "./TasksList.css";
import Input from "./Input";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../features/tasks/tasksSlice";
import { useGetTasksQuery } from "../../features/api/apiSlice";

const TaskList = () => {
  //const taskList = useSelector(selectTaskList);

  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = JSON.stringify(tasks);
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="tasks_container">
      <div className="taskList_container">
        {/*         {taskList.map((item) => (
          <TaskItem name={item.item} done={item.done} id={item.id} />
        ))} */}
        {content}
      </div>

      <Input />
    </div>
  );
};

export default TaskList;
