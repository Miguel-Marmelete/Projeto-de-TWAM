async function addMovie({ movieId }) {
  const list_id = localStorage.getItem("list_id");
  const session_id = localStorage.getItem("session_id");
  const success_status_code = 12;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmZhZjAxZDhlNDNkMDFlMmJhY2QxNjdjYmJlNTVjYyIsInN1YiI6IjY0MDYxYTczMzgzZGYyMDBhOTU1ZTZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.go6AtD8ijivF0367MCqzWRUeIp4nnPeJJVKKg8qJY4s",
    },
    body: JSON.stringify({ media_id: movieId }),
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/list/${list_id}/add_item?session_id=${session_id}`,
    options
  );
  const movieData = await response.json();

  if (movieData.status_code === success_status_code) {
    alert("Movie added to watchlist");
  } else {
    alert("Could not add movie to watchlist, try again");
  }
}
export default addMovie;
