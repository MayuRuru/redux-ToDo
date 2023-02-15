import React from "react";
import "./App.css";
import TasksList from "./components/tasks/TasksList";
import NotesList from "./components/notes/NotesList_extended";
import NoteForm from "./components/notes/NoteForm_extended";

function App() {
  return (
    <main>
      <TasksList />
      <section>
        <NoteForm />
        <NotesList />
      </section>
    </main>
  );
}

export default App;
