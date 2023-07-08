import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import getMovieById from "../scripts/getMovieById";
function MovieInfo() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    async function getMovie() {
      //console.log("MOVIE ID: " + movieId);
      const getMovie = await getMovieById(movieId);
      console.log("MOVIE: " + getMovie);
      setMovie(getMovie);
    }
    getMovie();
  }, []);

  return (
    <div className="movie_info">
      <img
        className="movie_info_image"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h1 className="movie_info_title">{movie.title}</h1>
      <h1 className="movie_info_rating">
        <FaStar /> {movie.vote_average}{" "}
      </h1>

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
