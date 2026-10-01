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

const initialState = {
  movies: [],
  movie: null,
  searchResults: [],
  loading: false,
  error: null
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      };

    case MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload
      };

    case MOVIE_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload
      };

    case SEARCH_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default movieReducer;