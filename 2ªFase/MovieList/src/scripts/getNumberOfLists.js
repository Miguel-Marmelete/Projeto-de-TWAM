async function numberOfLists() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmZhZjAxZDhlNDNkMDFlMmJhY2QxNjdjYmJlNTVjYyIsInN1YiI6IjY0MDYxYTczMzgzZGYyMDBhOTU1ZTZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.go6AtD8ijivF0367MCqzWRUeIp4nnPeJJVKKg8qJY4s",
    },
  };

  //const data = await res.json();
  const res = await fetch(
    "https://api.themoviedb.org/3/account/18059601/lists?page=1",
    options
  );
  const data = await res.json();
  console.log(data);
  return data.total_results;
}
export default numberOfLists;
