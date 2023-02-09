import React from "react";
import "./App.css";
import NotesList from "./components/notes/NotesList";
import TasksList from "./components/tasks/TasksList";

function App() {
  return (
    <main>
      <TasksList />
      <NotesList />
    </main>
  );
}

export default App;
