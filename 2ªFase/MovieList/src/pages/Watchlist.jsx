import MovieCard from "../components/MovieCard";
import urls from "../../urls";
import React, { useEffect, useState } from "react";

function Watchlist() {
  const [watchlistMovies, setwatchlistMovies] = useState([]);
  const [change, setChange] = useState(false);
  const watchlistId = localStorage.getItem("list_id");

  useEffect(() => {
    const movies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmZhZjAxZDhlNDNkMDFlMmJhY2QxNjdjYmJlNTVjYyIsInN1YiI6IjY0MDYxYTczMzgzZGYyMDBhOTU1ZTZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.go6AtD8ijivF0367MCqzWRUeIp4nnPeJJVKKg8qJY4s",
        },
      };
      const response = await fetch(urls.GET_LIST + watchlistId, options);
      const data = await response.json();
      setwatchlistMovies(data.items);
    };
    movies();
  }, [change]);
  const movieCards = watchlistMovies.map((movie) => {
    return (
      <MovieCard key={movie.id} movieId={movie.id} setChange={setChange} />
    );
  });

  return <div className="watchlist_page">{movieCards}</div>;
}

export default Watchlist;
