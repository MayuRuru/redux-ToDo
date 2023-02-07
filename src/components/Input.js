import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTask } from "../features/taskSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    //console.log(`adding task ${input}`);

    dispatch(
      saveTask({
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
