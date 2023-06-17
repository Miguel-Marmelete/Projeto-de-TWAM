import urls from "../../urls";

async function removeItem({ movieId }) {
  const list_id = localStorage.getItem("list_id");
  const session_id = localStorage.getItem("session_id");
  console.log("id: " + list_id);
  console.log("session_id: " + session_id);
  console.log("movie_id: " + movieId);

  if (list_id && session_id) {
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
      `https://api.themoviedb.org/3/list/${list_id}/remove_item?session_id=${session_id}`,
      options
    );
    await response.json();
  }
}
export default removeItem;
