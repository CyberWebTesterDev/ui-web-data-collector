import React from "react";
import MovieDataList from "../data-list/movie-data-list";

const MoviesPage = () => {
  return (
    <React.Fragment>
      <div className="movies-page">Данные из Kinopoisk</div>
      <MovieDataList />
    </React.Fragment>
  );
};

export default MoviesPage;
