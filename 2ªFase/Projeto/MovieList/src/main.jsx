import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Watchlist from "./pages/Watchlist.jsx";
import MovieInfoPage from "./pages/MovieInfoPage.jsx";
import Home from "./pages/Home.jsx";
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "watchlist",
    element: <Watchlist />,
  },
  {
    path: "movie",
    element: <MovieInfoPage />,
  },
]);*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie" element={<MovieInfoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
/*
<Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
*/
