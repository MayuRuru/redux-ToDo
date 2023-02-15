import "./NoteForm.css";
import { useState } from "react";
//import { noteAdded } from "../../features/notes/notesSlice";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";
import { useAddNewNoteMutation } from "../../features/notes/notesSlice_extended";

const NoteForm = () => {
  //const dispatch = useDispatch();
  const [addNewNote, { isLoading }] = useAddNewNoteMutation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onAuthorChanged = (e) => setUserId(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const users = useSelector(selectAllUsers);

  const userOptions = users.map((user, index) => (
    <option key={index} value={user.id}>
      {user.name}
    </option>
  ));

  //const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const onSaveNoteClicked = async () => {
    if (canSave) {
      try {
        await addNewNote({ title, content, userId }).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.log("Sorry cannot save it", error);
      }
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
        <label htmlFor="noteAuthor">Author:</label>
        <select id="noteAuthor" value={userId} onChange={onAuthorChanged}>
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
