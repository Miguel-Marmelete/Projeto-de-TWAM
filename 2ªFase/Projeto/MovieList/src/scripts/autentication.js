import urls from "../../urls";

// Tries to finish authentication flow
async function autentication() {
  const queryString = new URLSearchParams(window.location.search);
  const approved = queryString.get("approved");
  const request_token = queryString.get("request_token");
  console.log(approved);
  console.log(request_token);
  if (approved && request_token) {
    const { session_id } = await fetch(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${urls.API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          request_token: request_token,
        }),
      }
    ).then((res) => res.json());

    localStorage.setItem("session_id", session_id);
    window.location = `${urls.CALLBACK}`;
  } else if (localStorage.getItem("session_id") == null) {
    // Initiates an authentication flow
    // clear session information

    localStorage.removeItem("session_id");

    const { request_token } = await fetch(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${urls.API_KEY}`
    ).then((r) => r.json());

    // redirect user
    window.location = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${urls.CALLBACK}`;
  }
}
export default autentication;
