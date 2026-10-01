import React from "react";

import {
  BACKDROP_BASE_URL,
  IMAGE_BASE_URL
} from "../Utilis/constants.js";

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <div className="movie-details">
      {movie.backdrop_path && (
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`
          }}
        />
      )}

      <div className="details-content">
        <div className="details-poster">
          {movie.poster_path && (
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </div>

        <div className="details-info">
          <h1>{movie.title}</h1>

          {movie.tagline && (
            <p className="tagline">
              {movie.tagline}
            </p>
          )}

          <p>
            <strong>Release Date:</strong>{" "}
            {movie.release_date || "N/A"}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {typeof movie.vote_average === "number"
              ? movie.vote_average.toFixed(1)
              : "N/A"}
          </p>

          <p>
            <strong>Runtime:</strong>{" "}
            {movie.runtime
              ? `${movie.runtime} minutes`
              : "N/A"}
          </p>

          <div className="genres">
            {movie.genres?.map((genre) => (
              <span key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>

          <h2>Overview</h2>

          <p className="overview">
            {movie.overview || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;