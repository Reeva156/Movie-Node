import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies } from "../redux/actions/movieActions";
import MovieList from "../Components/MovieList";

const Home = () => {
  const dispatch = useDispatch();

  const {
    movies,
    loading,
    error
  } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="page">
      <section className="hero">
        <h1>Welcome to MovieHub</h1>

        <p>
          Discover popular movies and find your
          next favorite film.
        </p>
      </section>

      <section className="section">
        <h2>Popular Movies</h2>

        {loading && (
          <p className="loading">
            Loading movies...
          </p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {!loading && !error && (
          <MovieList movies={movies} />
        )}
      </section>
    </div>
  );
};

export default Home;