import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((mov, index) => (
    <div key={index}>
      <h1>{mov.title}</h1>
      <h2>{mov.time}</h2>
      <ul>
        {mov.genres.map((genre, genreIndex) => (
          <li key={genreIndex}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
