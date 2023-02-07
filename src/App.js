import React from "react";
import "./App.css";
//import store from "./app/store";
//import { taskAdded, taskCompleted } from "./app/actions";
import Input from "./components/Input";
import TaskItem from "./components/TaskItem";

/* const taskList = [
  {
    item: "dummy",
    done: false,
    id: 1,
  },
  {
    item: "yummy",
    done: true,
    id: 2,
  },
]; */

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

/* store.subscribe(() => {
  store.getState();
});

store.dispatch(taskAdded("task1"));
store.dispatch(taskCompleted(1));

console.log(store.getState()); */
export default App;
