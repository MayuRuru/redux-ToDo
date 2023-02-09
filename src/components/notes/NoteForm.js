import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { noteAdded } from "../../features/notes/notesSlice";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  //const onAuthorChanged = (e) => setUserId(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const users = useSelector(selectAllUsers);
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onSaveNoteClicked = () => {
    if (title && content) {
      dispatch(noteAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

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
        <label htmlFor="noteAuthor">Author:</label>
        <select id="noteAuthor" value={userId}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="noteContent">Content:</label>
        <textarea
          type="text"
          id="noteContent"
          name="noteContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSaveNoteClicked} disabled={!canSave}>
          SAVE
        </button>
      </form>
    </section>
  );
};

export default NoteForm;
