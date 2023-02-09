import React from "react";
import "./NotesList.css";
import { useSelector } from "react-redux";
import { selectNotesList } from "../../features/notes/notesSlice";

const NotesList = () => {
  const notes = useSelector(selectNotesList);

  const renderedNotes = notes.map((note) => (
    <article key={note.id}>
      <h3>{note.title}</h3>
      <p>{note.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Notes</h2>
      {renderedNotes}
    </section>
  );
};

export default NotesList;
