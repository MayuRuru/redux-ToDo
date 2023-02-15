import React from "react";
import "./NotesList.css";
import { useSelector } from "react-redux";
import { useGetNotesQuery } from "../../features/notes/notesSlice_extended";
import { selectNoteIds } from "../../features/notes/notesSlice_extended";
import NoteDetail from "./NoteDetail";

const NotesList = () => {
  const { isLoading, isSuccess, isError, error } = useGetNotesQuery();

  const orderedNotesIds = useSelector(selectNoteIds);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = orderedNotesIds.map((noteId) => (
      <NoteDetail key={noteId} noteId={noteId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  // const notes = useSelector(selectNotesList);

  /* const orderedNotes = notes
    .slice() // it creates a shadow copy of the array
    .sort((a, b) => b.date - a.date); */

  return (
    <section>
      <h2>Notes</h2>
      {content}
    </section>
  );
};

export default NotesList;
