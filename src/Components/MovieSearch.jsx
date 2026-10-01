import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { searchMovie } from "../redux/actions/movieActions";

const MovieSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      dispatch(searchMovie(query));
    }
  };

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default MovieSearch;