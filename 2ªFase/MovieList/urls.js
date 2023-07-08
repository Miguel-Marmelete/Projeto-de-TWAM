const API_KEY = "9ffaf01d8e43d01e2bacd167cbbe55cc";
/*export const GET_DETAILS_URL = `https://api.themoviedb.org/3/movie/2?api_key=${API_KEY}&language=en-US`;
export const NEW_SESSION_ID_URL = `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`;
export const REQUEST_TOKEN_URL = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`;
export const CREATE_LIST_URL = `https://api.themoviedb.org/3/list?api_key=${API_KEY}&session_id=`;
export const CALLBACK = "http://localhost:5500/index.html";
export const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`;
*/
const urls = {
  API_KEY: "9ffaf01d8e43d01e2bacd167cbbe55cc",
  GET_MOVIE_DETAILS_URL: `https://api.themoviedb.org/3/movie/2?api_key=${API_KEY}&language=en-US`,
  NEW_SESSION_ID_URL: `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
  REQUEST_TOKEN_URL: `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`,
  CREATE_LIST_URL: `https://api.themoviedb.org/3/list?api_key=${API_KEY}&session_id=`,
  CALLBACK: "http://localhost:5173",
  TOP_RATED_MOVIES_URL: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  GET_LIST: `https://api.themoviedb.org/3/list/`,
};
export default urls;
