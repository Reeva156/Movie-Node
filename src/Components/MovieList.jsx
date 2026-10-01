import React from "react";
import { Link } from "react-router-dom";

import { IMAGE_BASE_URL } from "../Utilis/constants.js";

const MovieList = ({ movies = [] }) => {
  if (!movies.length) {
    return (
      <div className="empty">
        No movies found.
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          className="movie-card"
          key={movie.id}
        >
          {movie.poster_path ? (
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title || "Movie"}
            />
          ) : (
            <div className="no-image">
              No Image
            </div>
          )}

          <div className="movie-info">
            <h3>{movie.title || "Untitled Movie"}</h3>

            <p>
              {movie.release_date
                ? movie.release_date.substring(0, 4)
                : "N/A"}
            </p>

            <span>
              Rating:{" "}
              {typeof movie.vote_average === "number"
                ? movie.vote_average.toFixed(1)
                : "N/A"}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
