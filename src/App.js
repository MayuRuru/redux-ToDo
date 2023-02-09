import React from "react";
import "./App.css";
import NoteForm from "./components/notes/NoteForm";
import NotesList from "./components/notes/NotesList";
import TasksList from "./components/tasks/TasksList";

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
