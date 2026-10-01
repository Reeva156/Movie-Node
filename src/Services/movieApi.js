import axios from "axios";

import { API_BASE_URL, TMDB_ACCESS_TOKEN } from "../Utilis/constants.js";

// Axios configuration
const movieApi = axios.create({
  baseURL: API_BASE_URL,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
});

// ==========================================
// 1. POPULAR MOVIES
// ==========================================

export const getPopularMovies = async () => {
  const response = await movieApi.get("/discover/movie", {
    params: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
    },
  });

  return response.data;
};

// ==========================================
// 2. MOVIE DETAILS
// ==========================================

export const getMovieDetails = async (movieId) => {
  if (!movieId) {
    throw new Error("Movie ID is required");
  }

  const response = await movieApi.get(`/movie/${movieId}`, {
    params: {
      language: "en-US",
      append_to_response: "credits,videos",
    },
  });

  return response.data;
};

// ==========================================
// 3. SEARCH MOVIES
// ==========================================

export const searchMovies = async (query) => {
  if (!query || !query.trim()) {
    return {
      results: [],
    };
  }

  const response = await movieApi.get("/search/movie", {
    params: {
      query: query.trim(),
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });

  return response.data;
};

// ==========================================
// 4. COLLECTION DETAILS
// ==========================================

export const getCollectionDetails = async (collectionId) => {
  if (!collectionId) {
    throw new Error("Collection ID is required");
  }

  const response = await movieApi.get(`/collection/${collectionId}`, {
    params: {
      language: "en-US",
    },
  });

  return response.data;
};

// ==========================================
// 5. COLLECTION IMAGES
// ==========================================

export const getCollectionImages = async (collectionId) => {
  if (!collectionId) {
    throw new Error("Collection ID is required");
  }

  const response = await movieApi.get(`/collection/${collectionId}/images`, {
    params: {
      include_image_language: "en,null",
    },
  });

  return response.data;
};

// ==========================================
// DEFAULT API
// ==========================================

export default movieApi;
