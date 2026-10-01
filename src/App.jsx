import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Search from "./pages/Search";
import MoviePage from "./pages/MoviePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        <Route
          path="/movie/:id"
          element={<MoviePage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route element={<PrivateRoute />}>
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Route>

        <Route
          path="*"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;