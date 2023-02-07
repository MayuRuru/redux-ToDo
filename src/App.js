import React from "react";
import "./App.css";
import Input from "./components/Input";
import TaskItem from "./components/TaskItem";
import { useSelector } from "react-redux";
import { selectTaskList } from "./features/taskSlice";

function App() {
  const taskList = useSelector(selectTaskList);

  return (
    <div className="app">
      <h1>Redux test</h1>
      <div className="app_container">
        <div className="tasks_container">
          {taskList.map((item) => (
            <TaskItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
