import React, { useState } from "react";
import "./Input.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

// old version:
// import { useDispatch } from "react-redux";
// import { taskAdded } from "../../features/tasks/tasksSlice";

const Input = ({ addTask }) => {
  const [input, setInput] = useState("");

  // gets the dispatch function to dispatch our actions
  // const dispatch = useDispatch();
  /*   const addTask = () => {
    dispatch(
      taskAdded({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name: input, done: false });
    setInput("");
  };

  return (
    <div className="input">
      <input
        type="text"
        id="new_task"
        value={input}
        placeholder="Enter new task"
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} onClick={handleSubmit} />
        {/* onClick={addTask}>Add */}
      </button>
    </div>
  );
};

export default Input;
