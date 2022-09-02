import React, { useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieBody from "./MovieBody";

export default function MovieList() {
  const [movies, setmovies] = useState([]);

  const addmovie = (newMovie) => {
    if (!newMovie.text) {
      return;
    }
    const newMovies = [newMovie, ...movies];
    setmovies(newMovies);
  };

  const removeMovie = (id) => {
    const newMovies = [...movies].filter((movie) => movie.id !== id);
    setmovies(newMovies);
  };

  const updateMovie = (movieId, newValue) => {
    if (!newValue) {
      return;
    }
    const newMovies = movies.map((item) =>
      item.id === movieId ? newValue : item
    );
    setmovies(newMovies);
  };

  return (
    <header>
      <h1>Movie Watch List</h1>
      <MovieHeader onSubmit={addmovie} />
      <br />
      <hr />
      <br />
      <br />
      <MovieBody
        movies={movies}
        removeMovie={removeMovie}
        updateMovie={updateMovie}
      />
    </header>
  );
}
