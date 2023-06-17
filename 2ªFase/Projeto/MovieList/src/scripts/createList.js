import numberOfLists from "./getNumberOfLists";
import urls from "../../urls";
async function createList() {
  const existList = localStorage.getItem("list_id");
  if (existList === null) {
    const session_id = localStorage.getItem("session_id");

    const nLists = await numberOfLists();

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: `List${nLists + 1}`,
        description: `List${nLists + 1}`,
        language: "en",
      }),
    };

    await fetch(
      `https://api.themoviedb.org/3/list?api_key=${urls.API_KEY}&session_id=${session_id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("list_id", `${response.list_id}`);
      })
      .catch((err) => console.error(err));
  }
}
export default createList;
