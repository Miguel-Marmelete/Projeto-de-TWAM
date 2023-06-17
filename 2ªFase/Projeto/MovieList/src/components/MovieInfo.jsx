import React from "react";
function MovieInfo({ movie }) {
  return (
    <div className="movie_info">
      <img
        className="movie_info_image"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h1 className="movie_info_title">{movie.title}</h1>
      <h1 className="movie_info_rating">{movie.vote_average} </h1>

      <div className="movie_info_release_date_div">
        <h2 className="movie_info_release_date_header">Release Date</h2>
        <p className="movie_info_release_date">{movie.release_date}</p>
      </div>

      <div className="movie_info_Overview_div">
        <h2 className="movie_info_Overview_header">Overview</h2>
        <p className="movie_info_Overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieInfo;
