import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { noteAdded } from "../../features/notes/notesSlice";

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSaveNoteClicked = () => {
    if (title && content) {
      dispatch(noteAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add new note:</h2>
      <form>
        <label htmlFor="noteTitle">Title:</label>
        <textarea
          type="text"
          id="noteTitle"
          name="noteTitle"
          value={title}
          onChange={onTitleChanged}
        />
      </form>
      <form>
        <label htmlFor="noteContent">Content:</label>
        <textarea
          type="text"
          id="noteContent"
          name="noteContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSaveNoteClicked}>
          SAVE
        </button>
      </form>
    </section>
  );
};

export default NoteForm;
