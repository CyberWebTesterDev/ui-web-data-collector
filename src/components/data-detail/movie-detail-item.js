import React from 'react';

const MovieDetailItem = ({ movie }) => {
  const {
    filmId,
    title,
    rating,
    year,
    country,
    genre,
    description,
    imgsrc,
  } = movie;

  return (
    <div className="movie-item-block">
      <img src={imgsrc} alt="Film_image" />
      <span>
        <font>Id:</font>
        <a href={`https://www.kinopoisk.ru/film/${filmId}/`} target="_blank">
          {filmId}
        </a>
      </span>
      <span>
        <font>Title:</font> {title} ({movie.originalTitle})
      </span>
      <span>
        <font>Year:</font> {year}
      </span>
      <span>
        <font>Country:</font> {country}
      </span>
      <span>
        <font>Genre:</font> {genre}
      </span>
      <span>
        <font>director:</font> {movie.director}
      </span>
      <span>
        <font>Main actors:</font>
        {movie.mainActors[0]}, {movie.mainActors[1]}, {movie.mainActors[2]},{' '}
        {movie.mainActors[3]}, {movie.mainActors[4]}
      </span>
      <span>
        <font>Rating:</font> {rating}
      </span>
      <span>
        <font>Description:</font> {description}
      </span>
      <button className="btn btn-warning">Сохранить в БД</button>
      <button className="btn btn-info">Посмотреть детали</button>
      <button className="btn btn-info">Уже смотрел</button>
      <button className="btn btn-info">Буду смореть</button>
    </div>
  );
};

export default MovieDetailItem;
