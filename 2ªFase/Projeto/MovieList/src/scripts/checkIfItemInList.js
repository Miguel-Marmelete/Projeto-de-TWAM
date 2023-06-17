import urls from "../../urls";

async function checkIfItemInList(movieId, listId) {
  const options = { method: "GET", headers: { accept: "application/json" } };

  const response = await fetch(
    `https://api.themoviedb.org/3/list/${listId}/item_status?language=en-US&movie_id=${movieId}&api_key=${urls.API_KEY}`,
    options
  );
  const data = await response.json();
  return data.item_present;
}

export default checkIfItemInList;
