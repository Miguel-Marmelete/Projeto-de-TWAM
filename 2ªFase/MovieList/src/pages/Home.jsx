import MovieCard from "../components/MovieCard";
import urls from "../../urls";
import React, { useEffect, useState } from "react";
import getMovieByName from "../scripts/getMovieByName";
import { useLocation } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [change, setChange] = useState(false);
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  const movieName = queryString.get("movieName");

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    if (movieName) {
      async function searchedMovies() {
        const getMovie = await getMovieByName(movieName);
        setMovies(getMovie);
      }
      searchedMovies();
    } else {
      getTopRatedMovies(urls.TOP_RATED_MOVIES_URL);
    }
  }, [location.search]);

  const movieCards = movies.map((movie) => {
    console.log(movie.id);
    return (
      <MovieCard key={movie.id} movieId={movie.id} setChange={setChange} />
    );
  });

  return (
    <div className="home_page">
      <div className="movies_container">{movieCards}</div>
    </div>
  );
}

export default Home;
