import urls from "../../urls";
function rateMovie(rate, movieId) {
  const session_id = localStorage.getItem("session_id");
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: `{"value":${rate}}`,
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?session_id=${session_id}&api_key=${urls.API_KEY}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.success) {
        alert("Success");
      } else {
        alert("Something went wrong");
      }
    })
    .catch((err) => console.error(err));
}

export default rateMovie;
