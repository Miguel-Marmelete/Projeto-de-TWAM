import urls from "../../urls";

async function getMovieByName(movieName) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmZhZjAxZDhlNDNkMDFlMmJhY2QxNjdjYmJlNTVjYyIsInN1YiI6IjY0MDYxYTczMzgzZGYyMDBhOTU1ZTZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.go6AtD8ijivF0367MCqzWRUeIp4nnPeJJVKKg8qJY4s",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${urls.API_KEY}`,
    options
  );
  const movieData = await response.json();
  return movieData.results;
}
export default getMovieByName;
