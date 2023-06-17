import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import getMovieById from "../scripts/getMovieById";
import addMovie from "../scripts/addMovie";
import checkIfItemInList from "../scripts/checkIfItemInList";
import removeItem from "../scripts/removeItem";
import { Link } from "react-router-dom";

function MovieCard({ movieId, setChange }) {
  const listId = localStorage.getItem("list_id");
  const [movie, setMovie] = useState({});
  const [isItemInList, setIsItemInList] = useState(false);

  useEffect(() => {
    async function handleMovie() {
      const getMovie = await getMovieById(movieId);
      setMovie(getMovie);
    }
    handleMovie();
  }, []);

  useEffect(() => {
    // Check if the item is in the list whenever the component is rendered
    const checkItemInList = async () => {
      const itemInList = await checkIfItemInList(movieId, listId);
      setIsItemInList(itemInList);
    };
    checkItemInList();
  }, [isItemInList]); // Run this effect whenever movieId or listId changes

  const handleAddRemoveClick = async () => {
    if (isItemInList) {
      const confirmed = window.confirm(
        "Are you sure you want to remove this movie?"
      );
      if (confirmed) {
        await removeItem({ movieId });
        setChange(true);
        setIsItemInList(false);
      }
    } else {
      await addMovie({ movieId });
      setIsItemInList(true);
    }
  };

  return (
    <div className="movie_card">
      <Link to={`/movie`}>
        <img
          className="movie_card_image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <div className="movie_card_info">
        <h2 className="movie_title">{movie.title}</h2>
        <p className="rating">
          <FaStar /> {movie.vote_average}
        </p>
        <button className="add_remove_button" onClick={handleAddRemoveClick}>
          {isItemInList ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
