import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./Input.css";
import { useDispatch } from "react-redux";
import { taskAdded } from "../../features/tasks/tasksSlice";
//import { useGetTasksQuery } from "../../features/api/apiSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  // gets the dispatch function to dispatch our actions

  /*   const addTask = () => {
    dispatch(
      taskAdded({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  }; */

  return (
    <div className="input">
      <input
        type="text"
        id="new_task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
        {/* onClick={addTask}>Add */}
      </button>
    </div>
  );
};

export default Input;
