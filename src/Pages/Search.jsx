import React from "react";
import { useSelector } from "react-redux";

import MovieSearch from "../Components/MovieSearch";
import MovieList from "../Components/MovieList";

const Search = () => {
  const { searchResults, loading, error } = useSelector(
    (state) => state.movies,
  );

  return (
    <div className="page">
      <section className="section">
        <h1>Search Movies</h1>

        <MovieSearch />

        {loading && <p className="loading">Searching...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && <MovieList movies={searchResults} />}
      </section>
    </div>
  );
};

export default Search;
