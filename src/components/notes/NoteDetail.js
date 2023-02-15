import React from "react";
import TimeConverter from "../../helper/TimeConverter";
import TopicsIcons from "./TopicsIcons";
import NotesAuthor from "./NotesAuthor";
import { selectNoteById } from "../../features/notes/notesSlice_extended";
import { useSelector } from "react-redux";

const NoteDetail = ({ noteId }) => {
  const note = useSelector((state) => selectNoteById(state, noteId));

  return (
    <article>
      <h3>{note.title}</h3>
      <p>{note.content.substring(0, 100)}</p>
      <p className="noteCredit">
        <NotesAuthor userId={note.userId} />
        <TimeConverter timestamp={note.date} />
      </p>
      <TopicsIcons note={note} />
    </article>
  );
};

export default NoteDetail;
