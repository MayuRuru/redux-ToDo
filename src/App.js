import React from "react";
import "./App.css";
import TaskList from "./components/tasks/TaskList";

function App() {
  return (
    <main className="app">
      <h1>Redux test</h1>
      <TaskList />
    </main>
  );
}

export default App;
