import React, { useState } from "react";
import TodoHeader from "./TodoHeader";

export default function TodoBody({ todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoHeader edit={edit} onSubmit={submitUpdate} />;
  } else {
    return todos.map((todo, index) => (
      <div id="tasks" key={index}>
        <div className="task">
          <div className="content">{todo.text}</div>
          <div className="actions">
            <button
              className="edit"
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            >
              Edit
            </button>
            <button className="delete" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  }
}