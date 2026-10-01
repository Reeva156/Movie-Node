import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchMovieDetails } from "../redux/actions/movieActions";
import MovieDetails from "../Components/MovieDetails";

const MoviePage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const {
    movie,
    loading,
    error
  } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <div className="page">
      {loading && (
        <p className="loading">
          Loading movie...
        </p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!loading && movie && (
        <>
          <MovieDetails movie={movie} />

          <Link
            to="/"
            className="back-button"
          >
            ← Back to Movies
          </Link>
        </>
      )}
    </div>
  );
};

export default MoviePage;