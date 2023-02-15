import React from "react";
import "./TasksList.css";
import Input from "./Input";
import TaskItem from "./TaskItem";
// old version:
// import { selectTaskList } from "../../features/tasks/tasksSlice";

import { useSelector } from "react-redux";
import {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  selectTaskIds,
} from "../../features/tasks/tasksSlice_extended";

const TaskList = () => {
  const taskList = useSelector(selectTaskIds);

  const {
    //data: tasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery();

  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    /* content = JSON.stringify(tasks); */
    content = taskList.map((task, index) => (
      <TaskItem
        className="task"
        key={index}
        task={task}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="tasks_container">
      <div className="taskList_container">
        <h1>Task List</h1>
        {content}
      </div>
      <Input addTask={addTask} />
    </div>
  );
};

export default TaskList;
