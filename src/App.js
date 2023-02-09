import React from "react";
import "./App.css";
import TaskList from "./components/taskList/TaskList";

function App() {
  return (
    <div className="app">
      <h1>Redux test</h1>
      <TaskList />
    </div>
  );
}

export default App;
