import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const NotesAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Anonymous"}</span>;
};

export default NotesAuthor;
