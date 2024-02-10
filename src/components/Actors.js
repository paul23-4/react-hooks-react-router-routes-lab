import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map((actor, index) => (
    <div key={index}>
      <h1>{actor.name}</h1>
      <ul>
        {actor.movies.map((movie, movieIndex) => (
          <li key={movieIndex}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
}

export default Actors;
