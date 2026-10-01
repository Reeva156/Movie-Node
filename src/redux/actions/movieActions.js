import {
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAIL
} from "../../Utilis/constants.js";

import {
  getPopularMovies,
  getMovieDetails,
  searchMovies
} from "../../Services/movieApi.js";

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_REQUEST
    });

    const data = await getPopularMovies();

    dispatch({
      type: MOVIE_SUCCESS,
      payload: data.results
    });
  } catch (error) {
    dispatch({
      type: MOVIE_FAIL,
      payload:
        error.response?.data?.status_message ||
        error.message
    });
  }
};

export const fetchMovieDetails =
  (movieId) => async (dispatch) => {
    try {
      dispatch({
        type: MOVIE_DETAILS_REQUEST
      });

      const data = await getMovieDetails(movieId);

      dispatch({
        type: MOVIE_DETAILS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: MOVIE_DETAILS_FAIL,
        payload:
          error.response?.data?.status_message ||
          error.message
      });
    }
  };

export const searchMovie =
  (query) => async (dispatch) => {
    try {
      dispatch({
        type: SEARCH_MOVIE_REQUEST
      });

      const data = await searchMovies(query);

      dispatch({
        type: SEARCH_MOVIE_SUCCESS,
        payload: data.results
      });
    } catch (error) {
      dispatch({
        type: SEARCH_MOVIE_FAIL,
        payload:
          error.response?.data?.status_message ||
          error.message
      });
    }
  };