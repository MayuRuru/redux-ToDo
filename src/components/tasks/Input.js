import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { taskAdded } from "../../features/taskList/taskSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  // gets the dispatch function to dispatch our actions

  const addTask = () => {
    dispatch(
      taskAdded({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default Input;
