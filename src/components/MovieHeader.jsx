import React, { useEffect, useRef, useState } from "react";

export default function MovieHeader({ edit, onSubmit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <div id="for-button">
        <input
          id="new-task-input"
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="movie-input edit"
          style={{ width: "100%" }}
          placeholder="What movie do you want to watch?"
        />
        <button id="new-task-submit" onClick={handleSubmit}>
          {edit ? "UPDATE LIST" : "ADD MOVIE"}
        </button>
      </div>
    </form>
  );
}
