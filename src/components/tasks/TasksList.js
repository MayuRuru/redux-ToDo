import React from "react";
import "./TasksList.css";
import Input from "./Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// old version:
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../features/tasks/tasksSlice";

import {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../../features/api/apiSlice_v1";

const TaskList = () => {
  //const taskList = useSelector(selectTaskList);
  const {
    data: tasks,
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
    content = tasks.map((task) => {
      return (
        <article key={task.id}>
          <div className="task">
            <input
              type="checkbox"
              id={task.id}
              done={task.done}
              onChange={() =>
                updateTask({
                  ...task,
                  done: !task.done,
                })
              }
            />
            <label htmlFor={task.id}>{task.name}</label>
          </div>
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
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="tasks_container">
      <div className="taskList_container">
        {/*         {taskList.map((item) => (
          <TaskItem name={item.item} done={item.done} id={item.id} />
        ))} */}
        <h1>Task List</h1>
        {content}
      </div>

      <Input addTask={addTask} />
    </div>
  );
};

export default TaskList;
