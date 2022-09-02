import React, { useState } from "react";
import MovieHeader from "./MovieHeader";

export default function MovieBody({ movies, removeMovie, updateMovie }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateMovie(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <MovieHeader edit={edit} onSubmit={submitUpdate} />;
  } else {
    return movies.map((movie, index) => (
      <div id="tasks" key={index}>
        <div className="task">
          <div className="content">{movie.text}</div>
          <div className="actions">
            <button
              className="edit"
              onClick={() => setEdit({ id: movie.id, value: movie.text })}
            >
              Edit
            </button>
            <button className="delete" onClick={() => removeMovie(movie.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  }
}
