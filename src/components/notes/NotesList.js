import React from "react";
import "./NotesList.css";
import { useSelector } from "react-redux";
import { selectNotesList } from "../../features/notes/notesSlice";
import NotesAuthor from "../../features/notes/NotesAuthor";
import TimeConverter from "../../helper/TimeConverter";
import TopicsIcons from "./TopicsIcons";

const NotesList = () => {
  const notes = useSelector(selectNotesList);

  const orderedNotes = notes
    .slice() // it creates a shadow copy of the array
    .sort((a, b) => b.date - a.date);

  const renderedNotes = orderedNotes.map((note) => (
    <article key={note.id}>
      <h3>{note.title}</h3>
      <p>{note.content.substring(0, 100)}</p>
      <p className="noteCredit">
        <NotesAuthor userId={note.userId} />
        <TimeConverter timestamp={note.date} />
      </p>
      <TopicsIcons note={note} />
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
